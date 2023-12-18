import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import Auth from "./Auth"

const Root = () => {
    const userId = false
    return (
        <div>
            {userId ? (
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
