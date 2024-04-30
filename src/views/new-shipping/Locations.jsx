import { ShippingSection } from '@components/ShippingSection'
import { ShippingSectionWeight } from '@components/ShippingSectionWeight'
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
      </section>
    </main>
  )
}
