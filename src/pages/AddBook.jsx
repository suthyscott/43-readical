import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'

const AddBook = () => {
  const {state} = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [priority, setPriority] = useState(0)
  const [imgURL, setURL] = useState('')

  const levels = [1,2,3,4,5,6,7,8,9,10]

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('/api/book', {title, desc, priority, imgURL, userId: state.userId})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input placeholder='title' onChange={e => setTitle(e.target.value)}/>
        <input placeholder='write a description' onChange={e => setDesc(e.target.value)}/>
        <input placeholder='image url' onChange={e => setURL(e.target.value)}/>
        <select onChange={(e) => setPriority(e.target.value)}>
          {levels.map(lev => {
            return <option value={lev} key={lev}>{lev}</option>
          })}
        </select>

        <button type='submit'>Add Book</button>
      </form>

      <input type='date' min={new Date().toISOString().split('T')[0]} />
    </div>
  )
}

export default AddBook