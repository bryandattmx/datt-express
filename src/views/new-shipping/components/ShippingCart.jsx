import { Button } from '@nextui-org/react'
import { PresetServiceSmall } from '../../../components/PresetService'
import Styles from '../styles/ShippingCart.module.css'
import { Link } from 'react-router-dom'

export function ShippingCart () {
  return (
    <section className={Styles.container}>
      <p className={Styles.title}>Envios a cotizar</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <PresetServiceSmall />
        <PresetServiceSmall />
        <PresetServiceSmall />
      </div>
      <Button color='success' style={{ color: 'white' }}>
        <Link to='../docs'>Siguiente</Link>
      </Button>
    </section>
  )
}
