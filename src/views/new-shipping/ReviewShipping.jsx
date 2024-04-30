import { ReviewShip } from './components/Review'
import { LocationInfo } from './components/LocationInfo'
import { ShipItem } from './components/ShipItem'
import Styles from './ReviewShipping.module.css'

const locationDestino = {
  location: 'Av. Juárez 123, Colonia Centro, Ciudad de México, CP 06050',
  name: 'ModaMex S.A. de C.V.',
  phone: '872 123 45 67',
  email: 'modamex@gmail.com'
}
const locationOrigen = {
  location: '123 Main Street, Anytown, USA, 12345',
  name: 'Juan Jose Ramirez Lopez',
  phone: '956 123 45 67',
  email: 'JuanJoseRamirezLopez@gmail.com'
}

export function Review () {
  return (
    <main className={Styles.containerMain}>
      <section className={Styles.containerOptions}>
        <ShipItem />
        <ShipItem />
        <ShipItem />
      </section>
      <aside className={Styles.containerReview}>
        <LocationInfo title='origen' shipInfo={locationOrigen} />
        <LocationInfo title='destino' shipInfo={locationDestino} />
        <ReviewShip />
      </aside>
    </main>
  )
}
