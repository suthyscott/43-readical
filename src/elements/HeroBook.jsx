import React from 'react'

const HeroBook = ({book}) => {
  return (
    <div className='w-1/2 h-full flex flex-col items-center '>
        <h1>{book.title}</h1>
        <img className='h-[80vh]' src={book.imgURL}/>
    </div>
  )
}

export default HeroBook