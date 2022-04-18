import React from 'react'

const Card = ({ data }) => {
  return (
    <div className="m-2">
    <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg  m-auto">
      <div className="image h-[250px] overflow-hidden">
        <img className="w-full object-cover h-[100%]" src={data.url} alt="Sunset in the mountains" />
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="font-mono text-gray-800 text-lg uppercase mb-2">By {data.caption}</div>
        <img className='rounded-full h-10 w-10 shadow-lg border-2 border-gray-800' src={data.url} alt="" />
      </div>
    </div>
    </div>

  )
}

export default Card