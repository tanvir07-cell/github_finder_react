import React from 'react'

const useFetchGithubUsers = async ({ queryKey }) => {

  const res = queryKey[1] && await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${queryKey[1]}`, {
    headers: {
      Authorization: `Token ${import.meta.env.VITE_GITHUB_API_KEY}`
    }
  })




  if (!res.ok) {
    throw new Error('Error fetching data')
  }

  return res.json();





}

export default useFetchGithubUsers
