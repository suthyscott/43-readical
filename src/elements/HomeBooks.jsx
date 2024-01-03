import React from 'react'

const HomeBooks = ({book}) => {
  return (
    <div className='h-1/2 flex flex-col items-center'>
        <h1>{book.title}</h1>
        <img className='h-3/4' src={book.imgURL}/>
    </div>
  )
}

export default HomeBooks