import React from 'react'

const Loading = () => {
  return (
   <div className="flex flex-col gap-4 w-52 container mx-auto">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
  )
}

export default Loading
