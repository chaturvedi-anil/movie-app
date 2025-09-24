import React from 'react'
import clsx from 'clsx'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    error?: string | boolean
}
const Input = ({label, error, className, ...props}: InputProps) => {

  return (
    <div className='space-y-1'>
        {label && <label className='block text-sm font-medium text-gray-700'>{label}</label>}
        <input className={clsx("block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm", 
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300", className)} {...props} />
        {error && <p className="text-xs text-red-500">{String(error)}</p>}

    </div>
  )
}

export default Input;