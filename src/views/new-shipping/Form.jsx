import { FormShip } from './components/FormShip'
import Styles from './styles/Form.module.css'

export function Form () {
  return (
    <main className={Styles.containerMain}>
      <div className={Styles.contentMain}>
        <section className={Styles.containerSection}>
          <FormShip title='origen' />
        </section>
        <section className={Styles.containerSection}>
          <FormShip title='destino' />
        </section>
      </div>
    </main>
  )
}
