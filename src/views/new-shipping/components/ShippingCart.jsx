import { Button, Divider } from '@nextui-org/react'
import Styles from '../styles/ShippingCart.module.css'
import { CardProduct } from './CardProduct'
import { Link } from 'react-router-dom'

export function ShippingCart () {
  return (
    <section className={Styles.container}>
      <article className={Styles.containerSectionGrid}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <p className={Styles.title}>Servicios</p>
          <Divider />
        </div>
        <div className={Styles.containerAddeds}>
          <CardProduct />
          <CardProduct />
        </div>
      </article>
      <article className={Styles.containerSectionGrid}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <p className={Styles.title}>Productos</p>
          <Divider />
        </div>
        <div className={Styles.containerAddeds}>
          <CardProduct />
        </div>
      </article>
      <Button color='success' style={{ color: 'white' }}>
        <Link to='../docs'>Siguiente</Link>
      </Button>
    </section>
  )
}
