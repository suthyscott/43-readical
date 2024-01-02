import { useState, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/AuthContext"
import { useNavigate } from "react-router-dom"

const Auth = () => {
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const [register, setRegister] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`/api/${register? 'register' : 'login'}`, {username, password})
          .then(res => {
            console.log(res.data)
            dispatch({type: 'LOGIN', payload: res.data})
            navigate('/home')
          })
          .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <h1>
                    Welcome to Readical! Please{" "}
                    {register ? "register" : "login"} below
                </h1>
                <input
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                type="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            <button onClick={() => setRegister(!register)}>Need to {register ? 'login' : 'register'}?</button>
        </div>
    )
}

export default Auth
