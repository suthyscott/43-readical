import {useContext} from "react"
import { Outlet, NavLink } from "react-router-dom"
import Auth from "./Auth"
import AuthContext from "../store/AuthContext"

const Root = () => {
    const {state, dispatch} = useContext(AuthContext)
    return (
        <div>
            {state.userId ? (
                <nav className="flex w-full h-[10vh] justify-between items-center bg-slate-500">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/completed">Completed Books</NavLink>
                    <NavLink to="/addbook">Add a new book</NavLink>
                    <NavLink to="/booklist">View Reading List</NavLink>
                    <NavLink to="/account">My Account</NavLink>
                    <button onClick={() => dispatch({type: 'LOGOUT'})}>Logout</button>
                </nav>
            ) : (
                <Auth />
            )}
            <Outlet />
        </div>
    )
}

export default Root
