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


const officialDate = Date.parse(book.readBy)
const stringDate = new Date(officialDate)

const newDateObj = new Date(stringDate.getTime() + stringDate.getTimezoneOffset()*60000);

console.log(newDateObj.toDateString())
// // console.log(stringDate.toDateString())
// // console.log(officialDate.getMonth())

// const timeString = "23:11:00"
// // Prepend any date. Use your birthday.
// const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
//   .toLocaleTimeString('en-US',
//     {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
//   );



const displayDate = ``
  return (
    <div className='h-[500px] w-[500px] flex flex-col justify-center items-center'>
        <h1>{book.title}</h1>
        <h2>{book.desc}</h2>
        <img src={book.imgURL} className='h-3/4 w-3/4'/>
        <h2>{new Date(book.readBy).toString()}</h2>
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