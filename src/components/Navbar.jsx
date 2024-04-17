import { Avatar } from '@nextui-org/react'
import Styles from './styles/Navbar.module.css'
export function Navbar () {
  return (
    <header className={Styles.container}>
      <section style={{ display: 'flex', gap: '1rem' }}>
        <p className={Styles.user}>Usuario de prueba<span className={Styles.typeUser}>Empresa</span></p>
        <Avatar />
      </section>

    </header>
  )
}
