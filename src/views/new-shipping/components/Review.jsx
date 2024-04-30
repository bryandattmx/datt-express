import { Button } from '@nextui-org/react'
import Styles from '../styles/Review.module.css'
import { Link } from 'react-router-dom'

export function ReviewShip () {
  return (
    <article className={Styles.container}>
      <header>
        <p className={Styles.title}>Finalizar envio</p>
        <p className={Styles.textLabel}>Paquete: <span className={Styles.subtitleLabel}>160 x 72 x 18</span></p>
      </header>
      <div className={Styles.divider} />
      <div>
        <p className={Styles.textBody}>Envio<span>$ 3,200</span></p>
        <p className={Styles.textBody}>Cupon<span>$ 0</span></p>
      </div>
      <div className={Styles.divider} />
      <div>
        <p className={Styles.textFinalReview}>Tienes un cupon? <span className={Styles.finalMoney}>$ 3,200</span></p>
      </div>
      <footer className={Styles.containerButtons}>
        <Button size='md'><Link to='../docs'>Editar envio</Link></Button>
        <Button size='md' color='secondary'>Guardar envio</Button>
        <Button size='md' color='success' style={{ color: 'white' }}>Ir a pagar</Button>
      </footer>
    </article>
  )
}
