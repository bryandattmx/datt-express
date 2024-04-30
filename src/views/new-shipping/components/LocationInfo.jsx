import Styles from '../styles/Location.module.css'

export function LocationInfo ({ title, shipInfo }) {
  return (
    <article className={Styles.container}>
      <p className={Styles.title}>Informacion de {title}</p>
      <div>
        <p className={Styles.infoLabel}>Direccion: <span className={Styles.textLabel}>{shipInfo.location}</span></p>
        <p className={Styles.infoLabel}>Nombre: <span className={Styles.textLabel}>{shipInfo.name}</span></p>
        <p className={Styles.infoLabel}>Telefono: <span className={Styles.textLabel}>{shipInfo.phone}</span></p>
        <p className={Styles.infoLabel}>Correo: <span className={Styles.textLabel}>{shipInfo.email}</span></p>
      </div>
    </article>
  )
}
