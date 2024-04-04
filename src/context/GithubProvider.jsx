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

    const [specificUser, setSpecificUser] = useState(null)

    const { data: users, error, isError, isFetching, isPending } = useQuery({
        queryKey: ["githubUsers", specificUser],
        queryFn: useFetchGithubUsers
    })

    const handleSpecificUser = (login) => {
        setSpecificUser(login)
    }











    // console.log(users)
    return (
        <githubContext.Provider value={{
            users,
            error,
            isFetching,
            isPending,
            isError,
            handleSpecificUser

        }}>{
                children

            }</githubContext.Provider>
    )
}

export const useGithubContext = () => useContext(githubContext)

export default GithubProvider