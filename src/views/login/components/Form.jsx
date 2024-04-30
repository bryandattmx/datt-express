import { Button, Checkbox, Input } from '@nextui-org/react'
import Styles from './Form.module.css'
import { Link } from 'react-router-dom'

const baseURL = import.meta.env.VITE_BASE_URL

export function Form () {
  return (
    <div className={Styles.container}>
      <img alt='LogoDatt' src='https://dattexpress.com/wp-content/uploads/2023/02/DATTMX-Logistica-Expres-LOGO-2.png' width={150} />
      <div className={Styles.header}>
        <p className={Styles.title}>Iniciar sesion</p>
        <p className={Styles.subtitle}>Accede al sistema Datt con tus credenciales</p>
      </div>
      <div className={Styles.content}>
        <Input variant='bordered' label='Email' placeholder='example@dattmx.com' labelPlacement='outside' />
        <Input variant='bordered' label='Password' placeholder='*******' labelPlacement='outside' />
        <Checkbox color='success'>Recordarme</Checkbox>
        <Button color='success' style={{ color: 'white' }}>
          <Link to={`../${baseURL}/app/dashboard`}>
            Iniciar Sesion
          </Link>
        </Button>
      </div>
    </div>
  )
}
