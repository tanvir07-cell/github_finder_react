import { useQuery } from "@tanstack/react-query"
import { createContext, useContext, useState } from "react"
import useFetchGithubUsers from "../useFetchGithubUsers"
import Loading from "../components/Loading"


const githubContext = createContext({
    users: [],
    error: null,
    isFetching: false,
    isPending: false
})


const GithubProvider = ({ children }) => {

    // const [specificUser, setSpecificUser] = useState(null)

    // const { data: users, error, isError, isFetching, isPending } = useQuery({
    //     queryKey: ["githubUsers"],
    //     queryFn: useFetchGithubUsers
    // })



    const getSpecificUser = async (name) => {
        const res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${name}`, {
            headers: {
                Authorization: `Token ${import.meta.env.VITE_GITHUB_API_KEY}`
            }
        })

        if (!res.ok) {
            throw new Error('Error fetching data')
        }

        return res.json();


    }







    // if (specificUserIsPending) {
    //     return <Loading />
    // }

    // if (specificUserIsError) {
    //     return <div>Error: {specificUserError.message}❌</div>
    // }

    // if (specificUserIsFetching) {
    //     return <Loading />
    // }

    // console.log(users)
    return (
        <githubContext.Provider value={{
            // users,
            // error,
            // isFetching,
            // isPending,
            // getSpecificUser,
            // specificUserData,
            // specificUserError,
            // specificUserIsFetching,
            // specificUserIsPending
            getSpecificUser
        }}>{
                children

            }</githubContext.Provider>
    )
}

export const useGithubContext = () => useContext(githubContext)

export default GithubProvider