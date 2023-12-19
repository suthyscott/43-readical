require('dotenv').config()
const express = require('express')
const cors = require("cors")
const {sequelize} = require("./util/database")

const {User} = require('./models/user')
const {Book} = require('./models/book')
const {Topic} = require('./models/topic')
const {BookTopic} = require('./models/bookTopic')

User.hasMany(Book)
Book.belongsTo(User)

Book.hasMany(BookTopic)
BookTopic.belongsTo(Book)

Topic.hasMany(BookTopic)
BookTopic.belongsTo(Topic)

const {register, login} = require('./controllers/authController')

const {PORT} = process.env

const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/register', register)
app.post('/api/login', login)


sequelize.sync()
// sequelize.sync({force: true})
    .then(() => app.listen(PORT, console.log(`Take us to warp ${PORT}!`)))
    .catch(err => console.log(err))