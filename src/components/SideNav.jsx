import { Avatar, Tooltip } from '@nextui-org/react'
import { LuBox, LuTruck, LuWallet2 } from 'react-icons/lu'
import { TbRouteAltLeft, TbWeight } from 'react-icons/tb'
import { RiHome6Line } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import Styles from './styles/Sidebar.module.css'

export function Sidebar () {
  const baseURL = import.meta.env.VITE_BASE_URL
  const location = useLocation()

  return (
    <nav className={Styles.container}>
      <header className={Styles.header}>
        <img src='https://dattexpress.com/wp-content/uploads/2023/02/DATTMX-Logistica-Expres-LOGO-2.png' alt='dattExpress' width={140} />
        <ul className={Styles.listNavigations}>
          <li className={`${baseURL}/app/dashboard` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Tooltip content='Inicio' placement='right' color='danger'>
              <Link to={`${baseURL}/app/dashboard`} className={`${baseURL}/app/dashboard` !== location.pathname ? Styles.links : Styles.linkActive}>
                <RiHome6Line className={Styles.icon} />
                <span>Inicio</span>
              </Link>
            </Tooltip>
          </li>
          <li className={`${baseURL}/app/new-shipping` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Tooltip key='cotizacion' content='Cotizar envio' placement='right' color='danger'>
              <Link to={`${baseURL}/app/new-shipping`} className={`${baseURL}/app/new-shipping` !== location.pathname ? Styles.links : Styles.linkActive}>
                <LuTruck className={Styles.icon} />
                <span>Cotizar envios </span>
              </Link>
            </Tooltip>
          </li>
          <li className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Tooltip key='envios' content='Mis envios' placement='right' color='danger'>
              <Link to={`${baseURL}/app/my-shipping`} className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.links : Styles.linkActive}>
                <LuBox className={Styles.icon} />
                <span>Mis envios</span>
              </Link>
            </Tooltip>
          </li>
          <li className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Tooltip key='envios' content='Mis envios' placement='right' color='danger'>
              <Link to={`${baseURL}/app/my-shipping`} className={Styles.links}>
                <TbRouteAltLeft className={Styles.icon} />
                <span>Integraciones</span>
              </Link>
            </Tooltip>
          </li>
          <li className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Tooltip key='envios' content='Mis envios' placement='right' color='danger'>
              <Link to={`${baseURL}/app/my-shipping`} className={Styles.links}>
                <LuWallet2 className={Styles.icon} />
                <span>Prepago</span>
              </Link>
            </Tooltip>
          </li>
          <li className={`${baseURL}/app/my-shipping` !== location.pathname ? Styles.items : Styles.activeItem}>
            <Tooltip key='envios' content='Mis envios' placement='right' color='danger'>
              <Link to={`${baseURL}/app/my-shipping`} className={Styles.links}>
                <TbWeight className={Styles.icon} />
                <span>Sobrepeso</span>
              </Link>
            </Tooltip>
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
