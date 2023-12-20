import {createContext, useReducer, useEffect} from 'react' 

const initialState = {
    userId: null,
    token: null,
    exp: null,
    username: null
}

const AuthContext = createContext()

const getLocalData = () => {
    const storedToken = localStorage.getItem('token')
    const storedUserId = localStorage.getItem('userId')
    const storedExp = localStorage.getItem('exp')
    const storedUsername = localStorage.getItem('username')

    let remainingTime = storedExp - new Date().getTime()
    if(remainingTime < 0){
        localStorage.clear()
        return null
    }

    return {
        token: storedToken,
        exp: storedExp,
        userId: storedUserId,
        username: storedUsername
    }
}

const AuthContextProvider = (props) => {
    const reducer = (state, action) => {
        switch(action.type){
            case "LOGIN":
                const {token, userId, exp, username} = action.payload
                localStorage.setItem('token', token)
                localStorage.setItem('userId', userId)
                localStorage.setItem('exp', exp)
                localStorage.setItem('username', username)
                return {...state, token, exp, userId, username}
            case "LOGOUT":
                localStorage.clear()
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        let localData = getLocalData()
        if(localData){
            dispatch({type: 'LOGIN', payload: localData})
        }
    }, [])

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
export {AuthContextProvider}