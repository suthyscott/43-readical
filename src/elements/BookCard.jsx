import React from 'react'

const BookCard = ({book}) => {
  return (
    <div className='h-[500px] w-[500px]'>
        <h1>{book.title}</h1>
        <h2>{book.desc}</h2>
        <img src={book.imgURL} className='h-3/4 w-3/4'/>
        <p>{book.priority}</p>
    </div>
  )
}

export default BookCard