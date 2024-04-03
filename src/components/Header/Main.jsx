import { useQuery } from "@tanstack/react-query"
import useFetchGithubUsers from "../../useFetchGithubUsers"
import Loading from "../Loading"
import UsersListItem from "../UsersListItem"
import { useGithubContext } from "../../context/GithubProvider"
import { useState } from "react"

const Main = () => {
  const [input, setInput] = useState("")
  const [specificUsers, setSpecificUsers] = useState([])
  const [isLoading, setIsLoading] = useState("")
  const [isError, setIsError] = useState("")


  const { getSpecificUser } = useGithubContext()
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setIsLoading(true)


      const data = await getSpecificUser(input)
      console.log(data)


      if (data.total_count > 0) {
        setSpecificUsers(data.items)


      }

      else {
        setIsError("No data found")
      }

    }
    catch (err) {
      setIsError(err.message)

    }
    finally {
      setIsLoading(false)
    }







  }

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <h1 className="text-3xl">Error: {isError}❌</h1>
  }







  return (
    // <div className='container mx-auto grid
    // grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 
    // '>
    //   {
    //     users.map(user => (
    //       <UsersListItem key={user.id}
    //         {...user}
    //       />

    //     ))
    //   }

    // </div>
    <>
      <div className='container mx-auto flex items-center justify-center mt-10 mb-10 h-[85vh]'>
        <form className="join" onSubmit={handleSubmit}>
          <input className="input input-bordered join-item" placeholder="search user" id="name" name="name" onChange={(e) => setInput(e.target.value)} />
          <button className="btn join-item rounded-r-full">Submit</button>
        </form>



      </div>

      {
        specificUsers && <div className="container mx-auto grid
         grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:w-[100%] mt-[-10rem]">
          {
            specificUsers.map(user => (
              <UsersListItem key={user.id}
                {...user}
              />

            ))

          }

        </div>


      }
    </>

  )
}

export default Main
