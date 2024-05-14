import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { FormCustomShip } from '../views/new-shipping/components/FormCustomShip'
import { FaPlus } from 'react-icons/fa6'
import { ModalPresetServices } from './ModalPresetServices'
import Styles from './styles/ShoppingSectionWeight.module.css'

export function ShippingSectionWeight () {
  const [presetService, setPresetService] = useState(false)
  return (
    <section className={Styles.container}>
      <header className={Styles.header}>
        <ModalPresetServices isActive={presetService} setActive={setPresetService} />
        <p className={Styles.title}>Selecciona un paquete existente o personaliza uno</p>
        <Button color='default' variant='flat' onPress={() => setPresetService(!presetService)}>
          <FaPlus />
          Agregar Servicio prestablecido
        </Button>
      </header>
      {
        presetService === 'existentes'
          ? <FormCustomShip type={presetService} />
          : <FormCustomShip type={presetService} />
      }
      <Button color='default' variant='flat'><FaPlus />Agregar envio</Button>
    </section>
  )
}
