import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root.jsx"
import Home from "./pages/Home.jsx"
import Booklist from "./pages/Booklist.jsx"
import AddBook from "./pages/AddBook.jsx"
import Completed from "./pages/Completed.jsx"
import Account from "./pages/Account.jsx"
import Auth from "./pages/Auth.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/booklist",
                element: <Booklist />
            },
            {
                path: "/addbook",
                element: <AddBook />
            },
            {
                path: "/completed",
                element: <Completed />
            },
            {
                path: "/account",
                element: <Account />
            }
        ]
    }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App