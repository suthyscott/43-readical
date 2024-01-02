const { Book } = require("../models/book")

module.exports = {
    addBook: async (req, res) => {
        try {
            const { title, desc, imgURL, priority, userId, readBy } = req.body

            await Book.create({ title, desc, imgURL, priority, userId, readBy })

            res.status(200).send("That worked!")
        } catch (err) {
            console.log(err)
            res.status(500).send("Something went wrong in addBook")
        }
    },
    getAllBooks: async (req, res) => {
        try {
            const { userId } = req.params

            const allBooks = await Book.findAll({
                where: { userId },
                order: [["priority", "DESC"]]
            })

            res.status(200).send(allBooks)
        } catch (err) {
            console.log(err)
            res.status(500).send("Something went wrong in getAllBooks")
        }
    },
    editBook: async (req, res) => {
        try {
            const { title, desc, imgURL, priority, bookId } = req.body

            await Book.update(
                { title, desc, imgURL, priority },
                { where: { id: bookId } }
            )

            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.status(500).send("Something went wrong in getAllBooks")
        }
    }
}
