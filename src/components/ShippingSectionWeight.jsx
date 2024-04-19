import { Tab, Tabs, Select, Input, Button, Checkbox } from '@nextui-org/react'
import { LuUser2, LuBuilding2 } from 'react-icons/lu'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillQuestionCircle } from 'react-icons/ai'
import Styles from './styles/ShoppingSectionWeight.module.css'

export function ShippingSectionWeight () {
  return (
    <section className={Styles.container}>
      <header className={Styles.header}>
        <p className={Styles.title}>Selecciona un paquete existente o personaliza uno</p>
        <Tabs>
          <Tab title={<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><LuUser2 /><span>Cliente</span></div>} />
          <Tab title={<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><LuBuilding2 /><span>Empresa</span></div>} />
        </Tabs>
      </header>
      <div className={Styles.containerPaquetes}>
        <div>
          <label>Selecciona tipo de paquete</label>
          <Select placeholder='Ejemplo: Caja - Sobre' size='sm' variant='bordered' />
        </div>
        <div>
          <label>Peso</label>
          <div className={Styles.containersWithOptions}>
            <Input placeholder='Ingresa el peso' size='sm' type='number' variant='bordered' />
            <Select placeholder='Kg' size='sm' fullWidth={false} variant='bordered' />
          </div>
        </div>
        <div>
          <label>Contenido del paquete</label>
          <Input placeholder='Ejemplo: Ropa' size='sm' variant='bordered' />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '4px 0px', fontSize: '0.875rem', color: 'var(--primaryColor)' }}>
        <AiFillQuestionCircle />
        <span>¿Como medir mi paquete?</span>
      </div>
      <article className={Styles.footer}>
        <section className={Styles.containerInfoWeight}>
          <div className={Styles.containerDimensiones}>
            <div>
              <label>Largo</label>
              <div className={Styles.containersWithOptions}>
                <Input placeholder='Ingresa el peso' size='sm' type='number' variant='bordered' />
                <Select placeholder='cm' size='sm' fullWidth={false} variant='bordered' />
              </div>
            </div>
            <div>
              <label>Alto</label>
              <div className={Styles.containersWithOptions}>
                <Input placeholder='Ingresa el peso' size='sm' type='number' variant='bordered' />
                <Select placeholder='cm' size='sm' variant='bordered' />
              </div>
            </div>
            <div>
              <label>Ancho</label>
              <div className={Styles.containersWithOptions}>
                <Input placeholder='Ingresa el peso' size='sm' type='number' variant='bordered' />
                <Select placeholder='cm' size='sm' fullWidth={false} variant='bordered' />
              </div>
            </div>
          </div>
          <div className={Styles.containerInfoCalc}>
            <p className={Styles.textGrid}>Peso masa <span className={Styles.textGridValue}>5 Kg</span></p>
            <p className={Styles.textGrid}>Peso volumetrico<span className={Styles.textGridValue}>1 Kg</span></p>
            <p className={Styles.textGrid}>Peso a cotizar<span className={Styles.textGridValue}>5 Kg</span></p>
          </div>
          <Checkbox size='sm' color='success'>Guardar mi envio</Checkbox>
        </section>
        <div className={Styles.containerButton}>
          <Button size='lg' variant='shadow' color='success' style={{ color: 'white' }}>Siguiente <IoIosArrowForward /></Button>
        </div>
      </article>
    </section>
  )
}
