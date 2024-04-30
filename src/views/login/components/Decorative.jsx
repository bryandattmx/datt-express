import illustration from '../../../assets/illustration.svg'
import Styles from './Decorative.module.css'

export function Decorative () {
  return (
    <main className={Styles.container}>
      <header className={Styles.header}>
        <p className={Styles.dotText}><div className={Styles.dot} /> ¿Que hay de nuevo?</p>
        <p className={Styles.title}>Descubre la Nueva Era de Nuestra Plataforma!</p>
        <p className={Styles.textInfo}>Estamos encantados de informarte que hemos actualizado nuestro sistema para brindarte una experiencia más moderna y satisfactoria. ¡Esperamos que estas mejoras hagan tu experiencia aún más placentera y efectiva!</p>
      </header>
      <section className={Styles.containerImg}>
        <img alt='Ilustracion' src={illustration} width={450} />
      </section>
    </main>
  )
}
