import { Outlet } from 'react-router-dom'

export function NewShipping ({ children }) {
  return (
    <>
      {children}
      <Outlet />
    </>
  )
}
