import { Button } from '@nextui-org/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiBox } from 'react-icons/fi'
import { FaBoxOpen } from 'react-icons/fa6'
import Styles from './styles/PresetService.module.css'

export function PresetService () {
  return (
    <div className={Styles.container}>
      <section className={Styles.startContent}>
        <FaBoxOpen style={{ fontSize: '3rem' }} />
        <div className={Styles.textContent}>
          <p className={Styles.title}>14 X 14 X 14 Doblete</p>
          <span className={Styles.description}>
            Nuestro servicio incluye entregas rápidas, seguridad en el manejo, rastreo en tiempo real, atención al cliente personalizada y tarifas competitivas
          </span>
        </div>
      </section>
      <Button variant='light' color='success'>Seleccionar</Button>
    </div>
  )
}

export function PresetServiceSmall () {
  return (
    <article className={Styles.containerSmall}>
      <section style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {/* <Image width={60} alt='NextUI Fruit Image with Zoom' isZoomed src='https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg' /> */}
        <FiBox style={{ fontSize: '1.875rem' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className={Styles.title}>12 X 12 X 12</p>
          <span className={Styles.description}>Nuestro servicio incluye entregas rapidas</span>
        </div>
      </section>
      <Button variant='light' isIconOnly>
        <BsThreeDotsVertical />
      </Button>
    </article>
  )
}
