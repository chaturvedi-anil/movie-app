import React from 'react'
import clsx from 'clsx'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    error?: string | boolean
}
const Input = ({label, error, className, ...props}: InputProps) => {

  return (
    <div className='space-y-1'>
        {label && <label >{label}</label>}
        <input className={clsx("", error ? "" : "", className)} {...props} />
        {error && <p className="text-xs text-red-500">{String(error)}</p>}

    </div>
  )
}

export default Input;