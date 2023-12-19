const {User}= require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

const createToken = (username, id) => {
    return jwt.sign({
        username,
        id
    },
    SECRET,
    {
        expiresIn: '2 days'
    })
}

module.exports = {
    register: async(req, res) => {
        try {
            const {username, password} = req.body

            let foundUser = await User.findOne({where: {username}})

            if(foundUser){
                res.status(400).send('There is already a user with that username')
            } else {
                const salt = bcrypt.genSaltSync(10)

                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({username, hashedPass: hash})

                const token = createToken(newUser.username, newUser.id)

                const exp = Date.now() + 1000 * 60 * 60 * 48

                res.status(200).send({
                    username: newUser.username,
                    userId: newUser.id,
                    token,
                    exp
                })
            }

        } catch(err){
            console.log(err)
            res.status(500).send("There was an error registering")
        }
    },
    login: async(req, res) => {
        try {
            const {username, password} = req.body

            const foundUser = await User.findOne({where: {username}})

            if(!foundUser){
                res.status(400).send('No user with that name was found')
            } else {
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

                if(!isAuthenticated){
                    res.status(401).send('that password is incorrect')
                } else {
                    const token = createToken(foundUser.username, foundUser.id)

                    const exp = Date.now() + 1000 * 60 * 60 * 48

                    res.status(200).send({
                        username: foundUser.username,
                        userId: foundUser.id,
                        token,
                        exp
                    })
                }
            }

        } catch(err){
            console.log(err)
            res.status(500).send("There was an error logging in")
        }
    }
}