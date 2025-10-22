import React from 'react'

export default function CardCemponent(name,picture,salary) {
  return (
    <div>
        <div className='bg-gray-200 h-96 w-72 flex flex-col items-center gap-8'>
<h1>{name}</h1>


<img className='size-40 ' src={picture} alt="" />
<p>Salary:{salary}</p>
        </div>
    </div>
  )
}




