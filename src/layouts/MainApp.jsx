import { Outlet } from 'react-router-dom'
import { SidebarMain } from '@components/SideNav'
import Styles from './Styles/Main.module.css'

export function MainApp ({ children }) {
  return (
    <main className={Styles.container}>
      <SidebarMain />
      <Outlet />
      {children}
    </main>
  )
}
