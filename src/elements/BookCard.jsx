import {useState} from 'react'
import axios from 'axios'

const BookCard = ({book, refetchAllBooks}) => {
  const [editing, setEditing] = useState(false)
  const [priority, setPriority] = useState(book.priority)

  const handlePriorityChange = e => {
    e.preventDefault()

    axios.put('/api/book', {title: book.title, desc: book.desc, imgURL: book.imgURL, priority, bookId: book.id})
      .then(res => {
        refetchAllBooks()
        setEditing(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='h-[500px] w-[500px] flex flex-col justify-center items-center'>
        <h1>{book.title}</h1>
        <h2>{book.desc}</h2>
        <img src={book.imgURL} className='h-3/4 w-3/4'/>
        {editing ? (
          <form onSubmit={e => handlePriorityChange(e)}>
            
            <input value={priority} type='number' min={1} max={10} onChange={e => setPriority(e.target.value)}/>
            <button type='submit'>Save</button>
          </form>
        ) : (
          <div>
            <p>{book.priority}</p>
            <button onClick={() => setEditing(!editing)}>Change Priority</button>
          </div>
        )}
    </div>
  )
}

export default BookCard