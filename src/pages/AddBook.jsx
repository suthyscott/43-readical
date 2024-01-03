import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'

const AddBook = () => {
  const {state} = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [priority, setPriority] = useState(0)
  const [imgURL, setURL] = useState('')
  const [progress, setProgress] = useState(0)

  const levels = [1,2,3,4,5,6,7,8,9,10]

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('/api/book', {title, desc, priority, imgURL, userId: state.userId, progress})
      .then(res => {
        setTitle('')
        setDesc('')
        setPriority(0)
        setURL('')
        setProgress(0)
        alert('Your book was added!')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Book Title</label><input placeholder='title' value={title} onChange={e => setTitle(e.target.value)}/>
        <label>Book Description</label><input placeholder='write a description' value={desc} onChange={e => setDesc(e.target.value)}/>
        <label>Book Image</label><input placeholder='image url' value={imgURL} onChange={e => setURL(e.target.value)}/>
        <label>Reading priority</label><select onChange={(e) => setPriority(e.target.value)} defaultValue={priority}>
          {levels.map(lev => {
            return <option value={lev} key={lev}>{lev}</option>
          })}
        </select>
        <label>Reading Progress</label><input type='number' value={progress} min={0}  max={100} onChange={e => setProgress(e.target.value)}/>

        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook