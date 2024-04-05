import React from 'react'

const useFetchGithubUsers = async ({ queryKey }) => {
  let url = `${import.meta.env.VITE_GITHUB_API_URL}/users`

  let res;

  if (queryKey.length === 3 && queryKey[1] && queryKey[2]) {
        url = `${import.meta.env.VITE_GITHUB_API_URL}/users/${queryKey[1]}`;
      } 
      // Condition to search for users
      else if (queryKey.length >= 2 && queryKey[1]) {
        url = `${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${queryKey[1]}`;
      }

  
  res = await fetch(url,{
    headers: {
      'Authorization': `token ${import.meta.env.VITE_GITHUB_API_KEY}`
    }
  
  });
  

  
  if (!res.ok) {
    throw new Error('Error fetching data')
  }

  

  return res.json();





}

export default useFetchGithubUsers
