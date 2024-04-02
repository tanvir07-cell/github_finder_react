import {useQuery} from "@tanstack/react-query"
import useFetchGithubUsers from "../../useFetchGithubUsers"
import Loading from "../Loading"
import UsersListItem from "../UsersListItem"

const Main = () => {

  const {data:users,error,isError,isFetching,isPending} = useQuery({
    queryKey: ["githubUsers"],
    queryFn: useFetchGithubUsers
    })

    if(isPending){
      return <Loading/>
    }

    if(isError){
      return <div>Error: {error.message}❌</div>
    }

    if(isFetching){
      return <Loading/>
    }

    console.log(users)

  return (
    <div className='container mx-auto grid
    grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 
    '>
        {
          users.map(user => (
            <UsersListItem key = {user.id} 
             {...user}
            />
            
          ))
        }
      
    </div>
  )
}

export default Main
