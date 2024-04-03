import React from 'react'


const UsersListItem = ({ login, avatar_url }) => {
  return (
    <div className="mb-10 card w-96 bg-cranberry-900 bg-opacity-50 backdrop-blur-lg backdrop-filter shadow-sm shadow-sinbad-200">
      <figure><img src={avatar_url} alt={login} className='w-[100%]' /></figure>
      <div className="card-body flex-row items-center justify-between">
        <h2 className="card-title">@{login}</h2>
        <div className="card-actions">
          <button className="btn bg-cranberry-400 border-none text-cranberry-50 text-xl">See Details</button>
        </div>
      </div>
    </div>
  )
}

export default UsersListItem
