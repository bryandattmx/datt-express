import { ShippingSection } from '@components/ShippingSection'
import { ShippingSectionWeight } from '@components/ShippingSectionWeight'
import { ShippingCart } from './components/ShippingCart'
import Styles from '../Shipping.module.css'

export function Locations () {
  return (
    <main className={Styles.container}>
      <section className={Styles.containerGrids}>
        <header className={Styles.headerContainer}>
          <p className={Styles.titleHeader}>Agrega tus direcciones del envio</p>
          <div className={Styles.contentHeader}>
            <ShippingSection tipo='origen' />
            <ShippingSection tipo='destino' />
          </div>
        </header>
        <ShippingSectionWeight />
        <ShippingCart />
      </section>
    </main>
  )
}
