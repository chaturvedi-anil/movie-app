import React from 'react'
import clsx from 'clsx'

type AlertProps = {
    message: string,
    type?: "error" | "success" 
}
const Alert = ({message, type}: AlertProps) => {
  return (
    <div className={clsx("p-3 rounded text-sm mb-4", type==="error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700")}>{message}</div>
  )
}

export default Alert