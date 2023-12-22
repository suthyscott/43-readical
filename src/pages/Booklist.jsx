import { useState, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/AuthContext"
import { useLoaderData } from "react-router-dom"
import BookCard from "../elements/BookCard"

export const getAllBooks = async () => {
    const userId = localStorage.getItem("userId")
    const res = await axios.get(`/api/books/${userId}`)
    return res.data
}

const Booklist = () => {
    const { state } = useContext(AuthContext)
    const [allBooks, setAllBooks] = useState(useLoaderData())
    const [searchTerm, setSearchTerm] = useState("")

    const refetchAllBooks = () => {
        axios
            .get(`/api/books/${state.userId}`)
            .then(res => {
                console.log(res.data)
                setAllBooks(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <input
                    placeholder="Search for a book"
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex flex-wrap p-14">
                {allBooks
                    .filter(book => {
                        return book.title
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    })
                    .map(book => {
                        return (
                            <BookCard
                                key={book.id}
                                book={book}
                                refetchAllBooks={refetchAllBooks}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default Booklist
