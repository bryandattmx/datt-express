import { Form } from './components/Form'
import { Decorative } from './components/Decorative'
import background from '../../assets/background.svg'
import Styles from './Login.module.css'

export function LoginView () {
  return (
    <main className={Styles.container}>
      <img src={background} alt='Background' className={Styles.background} />
      <section className={Styles.content}>
        <Form />
        <Decorative />
      </section>
    </main>
  )
}
