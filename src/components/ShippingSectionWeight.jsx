import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { FormCustomShip } from '../views/new-shipping/components/FormCustomShip'
import { FaPlus } from 'react-icons/fa6'
import { ModalPresetServices } from './ModalPresetServices'
import { ModalEmbalaje } from './ModalEmbalaje'
import Styles from './styles/ShoppingSectionWeight.module.css'

export function ShippingSectionWeight () {
  const [currentModal, setCurrentModal] = useState(false)
  return (
    <section className={Styles.container}>
      <header className={Styles.header}>
        <ModalPresetServices isActive={currentModal} setActive={setCurrentModal} />
        <ModalEmbalaje isActive={currentModal} setActive={setCurrentModal} />
        <p className={Styles.title}>Selecciona un paquete existente o personaliza uno</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button size='sm' color='default' variant='flat' onPress={() => setCurrentModal('preset')}>
            <FaPlus />
            Agregar Servicio prestablecido
          </Button>
        </div>
      </header>
      <FormCustomShip type={currentModal} />
      <Button onPress={() => setCurrentModal('product')} color='default' variant='flat'><FaPlus />Agregar envio</Button>
    </section>
  )
}
