import React from 'react'

type CardProps = { 
    title?: string,
    children: React.ReactNode
}
const Card = ({title, children}: CardProps) => {
  return (
    <div className='w-full m-2 max-w-md p-6 bg-gray-200 rounded-lg shadow'>
        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
        {children}
    </div>
  )
}

export default Card

