import React from 'react'

const Card = ({data, players}) => {
  return (
    <div className="m-2">
    <div className="max-w-sm rounded bg-gray-900 text-white font-mono font-bold overflow-hidden shadow-lg  m-auto">
      <div className="image h-[250px] w-[350px] overflow-hidden">
        <img className="w-full object-cover h-[100%]" src={data.url} alt="Sunset in the mountains" />
      </div>
      <div className="px-6 py-4 flex flex-col ">
        <h4 className='uppercase text-center pb-3 text-2xl'>{data.teamName}</h4>
        <ul className='list-decimal text-sm px-5'>
          {players.map(player => (
            <a className='hover:text-sky-700  text-gray-400' href={`${player.fb}`}>
                <li className='py-1'>{player.ign}</li>
            </a>
         
          ))}
        </ul>
      </div>
    </div>
    </div>

  )
}

export default Card