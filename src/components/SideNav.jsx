import { Avatar } from '@nextui-org/react'
import { LuBox, LuTruck, LuWallet2 } from 'react-icons/lu'
import { TbWeight } from 'react-icons/tb'
import { RiHome6Line } from 'react-icons/ri'
import { HiOutlinePaperClip } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import Styles from './styles/Sidebar.module.css'
import { useEffect, useState } from 'react'

export function Sidebar () {
  const baseURL = import.meta.env.VITE_BASE_URL
  const location = useLocation()
  const [currentLocation, setCurrentLocation] = useState([])

  useEffect(() => {
    const currentRoute = location.pathname.split('/')
    setCurrentLocation(currentRoute)
  }, [location])

  return (
    <nav className={Styles.container}>
      <header className={Styles.header}>
        <img src='https://dattexpress.com/wp-content/uploads/2023/02/DATTMX-Logistica-Expres-LOGO-2.png' alt='dattExpress' width={140} />
        <ul className={Styles.listNavigations}>
          <li className={currentLocation.some((locationData) => locationData === 'dashboard') ? Styles.activeItem : Styles.items}>
            <Link to={`${baseURL}/app/dashboard`} className={currentLocation.some((locationData) => locationData === 'dashboard') ? Styles.linkActive : Styles.links}>
              <RiHome6Line className={Styles.icon} />
              <span>Inicio</span>
            </Link>
          </li>
          <li className={currentLocation.some((locationData) => locationData === 'new-shipping') ? Styles.activeItem : Styles.items}>
            <Link to={`${baseURL}/app/new-shipping/locations`} className={currentLocation.some((locationData) => locationData === 'new-shipping') ? Styles.linkActive : Styles.links}>
              <LuTruck className={Styles.icon} />
              <span>Cotizar envios </span>
            </Link>
          </li>
          <li className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Link to={`${baseURL}/app/my-shipping`} className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.links : Styles.linkActive}>
              <LuBox className={Styles.icon} />
              <span>Mis envios</span>
            </Link>
          </li>
          <li className={`${baseURL}/app/my-quotes` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Link to={`${baseURL}/app/my-quotes`} className={currentLocation.some((locationData) => locationData === 'my-quotes') ? Styles.linkActive : Styles.links}>
              <HiOutlinePaperClip className={Styles.icon} />
              <span>Mis cotizaciones</span>
            </Link>
          </li>
          <li className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Link to={`${baseURL}/app/my-shipping`} className={Styles.links}>
              <LuWallet2 className={Styles.icon} />
              <span>Prepago</span>
            </Link>
          </li>
          <li className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Link to={`${baseURL}/app/my-shipping`} className={Styles.links}>
              <TbWeight className={Styles.icon} />
              <span>Sobrepeso</span>
            </Link>
          </li>
        </ul>
      </header>
      <div className={Styles.containerAvatar}>
        <Avatar radius='md' isBordered />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className={Styles.titleAvatar}>Usuario Logeado</p>
          <span className={Styles.subtitleAvatar}>Cliente</span>
        </div>
      </div>
    </nav>
  )
}
