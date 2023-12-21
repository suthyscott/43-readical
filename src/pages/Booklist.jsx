import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'
import { useLoaderData } from 'react-router-dom'
import BookCard from '../elements/BookCard'


export const getAllBooks = async () => {
  const userId = localStorage.getItem('userId')
  const res = await axios.get(`/api/books/${userId}`)
  return res.data
}

const Booklist = () => {
  const allBooks = useLoaderData()

  return (
    <div>
      {allBooks.map(book => {
        return <BookCard key={book.id}  book={book}/>
      })}
    </div>
  )
}

export default Booklist