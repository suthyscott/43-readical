const { Book } = require("../models/book") // Adjust the path accordingly

const seedBooks = async () => {
    try {
        const books = [
            {
                imgURL: "https://example.com/book1.jpg",
                title: "The Great Gatsby",
                desc: "A novel written by American author F. Scott Fitzgerald.",
                priority: 1,
                progress: 50
            },
            {
                imgURL: "https://example.com/book2.jpg",
                title: "1984",
                desc: "A novel by George Orwell, about a dystopian future.",
                priority: 2,
                progress: 30
            },
            {
                imgURL: "https://example.com/book3.jpg",
                title: "To Kill a Mockingbird",
                desc: "A novel by Harper Lee, published in 1960.",
                priority: 3,
                progress: 70
            },
            {
                imgURL: "https://example.com/book4.jpg",
                title: "Pride and Prejudice",
                desc: "A romantic novel by Jane Austen, published in 1813.",
                priority: 4,
                progress: 20
            },
            {
                imgURL: "https://example.com/book5.jpg",
                title: "Moby-Dick",
                desc: "A novel by Herman Melville, first published in 1851.",
                priority: 5,
                progress: 80
            },
            {
                imgURL: "https://example.com/book6.jpg",
                title: "War and Peace",
                desc: "A novel by Leo Tolstoy, first published from 1865 to 1869.",
                priority: 6,
                progress: 40
            },
            {
                imgURL: "https://example.com/book7.jpg",
                title: "Crime and Punishment",
                desc: "A novel by the Russian author Fyodor Dostoevsky.",
                priority: 7,
                progress: 60
            },
            {
                imgURL: "https://example.com/book8.jpg",
                title: "The Odyssey",
                desc: "An ancient Greek epic poem attributed to Homer.",
                priority: 8,
                progress: 90
            },
            {
                imgURL: "https://example.com/book9.jpg",
                title: "Jane Eyre",
                desc: "A novel by English writer Charlotte Brontë.",
                priority: 9,
                progress: 10
            },
            {
                imgURL: "https://example.com/book10.jpg",
                title: "Brave New World",
                desc: "A dystopian social science fiction novel by Aldous Huxley.",
                priority: 10,
                progress: 95
            }
        ]

        // Using bulkCreate to insert multiple records
        await Book.bulkCreate(books)

        console.log("Books seeded successfully")
    } catch (error) {
        console.error("Error seeding books:", error)
    }
}
