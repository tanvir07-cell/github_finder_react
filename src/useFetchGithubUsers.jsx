import React from 'react'

const useFetchGithubUsers = async ({ queryKey }) => {
  let res = null;
  if(!queryKey[1]){
    res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_GITHUB_API_KEY}`
      }
    })
  
  }

  if(queryKey[1]){
    res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${queryKey[1]}`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_GITHUB_API_KEY}`
      }
    })
  
  }
  

  if(queryKey[1] && queryKey[2]){
    res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users/${queryKey[1]}`, {
      headers: {
        Authorization: `Token ${import.meta.env.VITE_GITHUB_API_KEY}`
      }
    })
  }

  
  

  
  if (!res.ok) {
    throw new Error('Error fetching data')
  }

  

  return res.json();





}

export default useFetchGithubUsers
