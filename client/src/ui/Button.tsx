import React from 'react';
import clsx from "clsx";

type ButtonProps = React.BaseHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'danger',
    loading?: boolean
}
const Button = ({children, className, variant='primary', loading, ...props} : ButtonProps) => {
    const base = "inline-flex items-center justify-center px-4 py-2 rounded font-medium hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

    const variants ={
        "primary": "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
        "secondary": "border-indigo-100 text-indigo-900 ring-indigo-400 hover:bg-border-200",
        "danger": "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
    }
  return (
    <button
        className={clsx(base, variants[variant], className)}
        {...props}
    >
        {loading ? "Loading..." : children}
    </button>
  )
}

export default Button