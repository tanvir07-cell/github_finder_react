import { useQuery } from "@tanstack/react-query"
import useFetchGithubUsers from "../../useFetchGithubUsers"
import Loading from "../Loading"
import UsersListItem from "../UsersListItem"
import { useGithubContext } from "../../context/GithubProvider"
import { useState } from "react"

const Main = () => {
  const [input, setInput] = useState("")



  const { users, error, isError, isFetching, isPending, handleSpecificUser } = useGithubContext()
  console.log(users)
  async function handleSubmit(e) {
    e.preventDefault();
    handleSpecificUser(input)











  }

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <div>Error: {error.message}❌</div>
  }

  if (isFetching) {
    return <Loading />
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
        !users.items && <div className="container mx-auto grid
         grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:w-[100%] mt-[-10rem]">
          {
            users.map(user => (
              <UsersListItem key={user.id}
                {...user}
              />

            ))

          }

        </div>


      }

      {
        users.items && <div className="container mx-auto grid
         grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:w-[100%] mt-[-10rem]">
          {
            users.items.map(user => (
              <UsersListItem key={user.id}
                {...user}
              />

            ))

          }

        </div>
      }

      {
        !users.total_count && <div className="container mx-auto grid mb-10">
          <h1 className="text-4xl text-center">No user found</h1>
        </div>
      }
    </>

  )
}

export default Main
