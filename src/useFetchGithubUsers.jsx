import React from 'react'

const useFetchGithubUsers = async() => {

    const res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users`)

    if(!res.ok){
        throw new Error('Error fetching data')
    }

    return res.json();



  
  return (
    <div>
      
    </div>
  )
}

export default useFetchGithubUsers
