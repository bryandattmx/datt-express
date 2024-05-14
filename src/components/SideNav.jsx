import { Avatar, Accordion, AccordionItem } from '@nextui-org/react'
import { LuBox, LuTruck, LuWallet2 } from 'react-icons/lu'
import { TbUsers } from 'react-icons/tb'
import { PiUsersThreeBold } from 'react-icons/pi'
import { RiHome6Line, RiBuildingLine } from 'react-icons/ri'
import { HiOutlinePaperClip } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import Styles from './styles/Sidebar.module.css'
import { MdOutlineInventory } from 'react-icons/md'
import { BiBox } from 'react-icons/bi'
import { useEffect, useState } from 'react'

export function SidebarMain () {
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
          <li className={`${baseURL}/app/embalaje` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Accordion isCompact className='px-0'>
              <AccordionItem startContent={<BiBox className={Styles.icon} />} title='Embalaje'>
                <Link to={`${baseURL}/app/embalaje/sells`} className={Styles.links} style={{ padding: '1rem' }}>
                  <LuWallet2 className={Styles.icon} />
                  <span>Ventas</span>
                </Link>
                <Link to={`${baseURL}/app/embalaje/storage`} className={Styles.links} style={{ padding: '1rem' }}>
                  <MdOutlineInventory className={Styles.icon} />
                  <span>Inventario</span>
                </Link>
              </AccordionItem>
            </Accordion>
          </li>
          <li className={`${baseURL}/app/clients` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Link to={`${baseURL}/app/clients`} className={`${baseURL}/app/clients` !== location.pathname ? Styles.links : Styles.linkActive}>
              <TbUsers className={Styles.icon} />
              <span>Clientes</span>
            </Link>
          </li>
          <li className={`${baseURL}/app/users` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Link to={`${baseURL}/app/users`} className={`${baseURL}/app/users` !== location.pathname ? Styles.links : Styles.linkActive}>
              <PiUsersThreeBold className={Styles.icon} />
              <span>Usuarios</span>
            </Link>
          </li>
          <li className={`${baseURL}/app/my` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Link to={`${baseURL}/app/my`} className={Styles.links}>
              <RiBuildingLine className={Styles.icon} />
              <span>Establecimientos</span>
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
