import Styles from '../styles/ShipItem.module.css'

export function ShipItem () {
  return (
    <section className={Styles.container}>
      <div className={Styles.containerShip}>
        <div className={Styles.containerTarifa}>
          <p className={Styles.title}>FedEx Int.<span className={Styles.tarifaItem}>Tarifa economica</span></p>
          <span className={Styles.textInfo}>Este envio se entregaria de 2 a 5 dias habiles, debido a que el peso declarado excede el valor permitido se cobra un 25% extra.</span>
        </div>
        <img width={150} alt='paqueteria' src='https://1000marcas.net/wp-content/uploads/2020/01/FedEx-logo.png' />
      </div>
    </section>
  )
}
