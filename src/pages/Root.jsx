import {useContext} from "react"
import { Outlet, NavLink } from "react-router-dom"
import Auth from "./Auth"
import AuthContext from "../store/AuthContext"

const Root = () => {
    const {state} = useContext(AuthContext)
    return (
        <div>
            {state.userId ? (
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/completed">Completed Books</NavLink>
                    <NavLink to="/addbook">Add a new book</NavLink>
                    <NavLink to="/booklist">View Reading List</NavLink>
                    <NavLink to="/account">My Account</NavLink>
                </nav>
            ) : (
                <Auth />
            )}
            <Outlet />
        </div>
    )
}

export default Root
