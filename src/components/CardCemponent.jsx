import React from 'react'

export default function CardComponent({ name, picture, salary, hobbies = ["sport1", "sport2", "sport3"] }) {
  return (
    <div className='bg-gray-200 h-96 w-72 flex flex-col items-center gap-2 rounded-2xl shadow-md p-4'>
      <h1 className='text-2xl font-semibold mt-4'>{name}</h1>
      <img className='size-40 rounded-full object-cover' src={picture} alt={name} />
      <p className='text-lg font-medium'>Salary: {salary}</p>
      <p>hobbies Are: {hobbies[0]}</p>
      <p >hobbies Are: {hobbies[1]}</p>
      <p >hobbies Are: {hobbies[2]}</p>
    </div>
  )
}
