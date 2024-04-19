import { ShippingSection } from '@components/ShippingSection'
import { ShippingSectionWeight } from '@components/ShippingSectionWeight'
import Styles from './Shipping.module.css'

export function NewShipping () {
  return (
    <main className={Styles.container}>
      <section className={Styles.containerGrids}>
        <ShippingSection tipo='origen' />
        <ShippingSection tipo='destino' />
        <ShippingSectionWeight />
      </section>
    </main>
  )
}
