import React from 'react'
import { useParams } from 'react-router-dom'
import { useGithubContext } from '../context/GithubProvider'
import Loading from '../components/Loading'

const User = () => {
    const {name} = useParams()
    const { user,
            err,
            isErr,
            isFetch,
            isPend} = useGithubContext()

    if(isFetch){
        return <Loading/>
    }
    if(isErr){
        return <h1>{err.message}</h1>
    }
    if(isPend){
        return <Loading/>
    }
  return (
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={
        user.avatar_url
    }
    alt={user.login} 
    className="max-w-sm rounded-lg shadow-2xl" />
    <div className="flex-col">
      <h1 className="text-5xl font-bold">{user.login}</h1>
      <p className="py-6">{user.bio?user.bio:`There is no bio for this ${user.login}`}</p>
      <button className="btn btn-primary"
       onClick={() => {
        window.open(user.html_url, '_blank')}}
      >Follow</button>
    </div>
   
  </div>
</div>
  )
}

export default User
