const {Book} = require('../models/book')

module.exports = {
    addBook: async (req, res) => {
        try {
            const {title, desc, imgURL, priority, userId} = req.body

            await Book.create({title, desc, imgURL, priority, userId})

            res.status(200).send('That worked!')

        } catch(err){
            console.log(err)
            res.status(500).send('Something went wrong in addBook')
        }
    },
    getAllBooks: async (req, res) => {
        try{
            const {userId} = req.params

            const allBooks = await Book.findAll({where: {userId}})

            res.status(200).send(allBooks)

        } catch(err){
            console.log(err)
            res.status(500).send('Something went wrong in getAllBooks')
        }
    }
}