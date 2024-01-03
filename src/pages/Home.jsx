import React from "react"
import { useLoaderData } from "react-router-dom"
import HeroBook from "../elements/HeroBook"
import HomeBooks from "../elements/HomeBooks"

export const getAllBooks = async () => {
    const userId = localStorage.getItem("userId")
    const res = await axios.get(`/api/books/${userId}`)
    return res.data
}

const Home = () => {
    const userBooks = useLoaderData().slice(0, 3)

    console.log(userBooks)
    return (
        <div className="flex h-[90vh]">
            <HeroBook book={userBooks[0]} />

            <div className="flex flex-col w-1/2 h-full">
                <HomeBooks book={userBooks[1]} />
                <HomeBooks book={userBooks[2]} />
            </div>
        </div>
    )
}

export default Home
