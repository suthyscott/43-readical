import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom"
import Root from "./pages/Root.jsx"
import Home from "./pages/Home.jsx"
import Booklist from "./pages/Booklist.jsx"
import AddBook from "./pages/AddBook.jsx"
import Completed from "./pages/Completed.jsx"
import Account from "./pages/Account.jsx"
import Auth from "./pages/Auth.jsx"
import { getAllBooks } from "../src/pages/Booklist.jsx"
import { useContext } from "react"
import AuthContext from "./store/AuthContext.jsx"

const App = () => {
    const { state } = useContext(AuthContext)



    console.log(state.userId)
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Root />,
                children: [
                    {
                        path: "/home",
                        element: <Home />,
                        loader: () => {
                            if(!state.userId){
                                return redirect('/auth')
                            } else {
                                return getAllBooks()
                            }
                        }
                    },
                    {
                        path: "/booklist",
                        element: <Booklist />,
                        loader: () => {
                            if(!state.userId){
                                return redirect('/auth')
                            } else {
                                return getAllBooks()
                            }
                        }
                    },
                    {
                        path: "/addbook",
                        element: <AddBook />,
                        loader: () => {
                            if(!state.userId){
                                return redirect('/auth')
                            } else {
                                return null
                            }
                        }
                    },
                    {
                        path: "/completed",
                        element: <Completed />,
                        loader: () => {
                            if(!state.userId){
                                return redirect('/auth')
                            } else {
                                return null
                            }
                        }
                    },
                    {
                        path: "/account",
                        element: <Account />,
                        loader: () => {
                            if(!state.userId){
                                return redirect('/auth')
                            } else {
                                return null
                            }
                        }
                    },
                    {
                        path: "/auth",
                        element: <Auth />,
                        loader: () => {
                            if(state.userId){
                                return redirect('/home')
                            } else {
                                return null
                            }
                        }
                    }
                ]
            }
        ]
        // { basename: "/home" }
    )

    return <RouterProvider router={router} />
}

export default App
