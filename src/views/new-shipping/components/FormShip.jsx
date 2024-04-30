import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Input, Select, Tab, Tabs } from '@nextui-org/react'
import { BsArrowReturnRight, BsArrowLeft } from 'react-icons/bs'

import Styles from '../styles/Form.module.css'

function RowButton () {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button color='default' variant='bordered'><Link to='../locations' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><BsArrowLeft />Atras</Link></Button>
      <Button color='success' style={{ color: 'white' }}><Link to='../review' style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>Siguiente<BsArrowReturnRight /></Link></Button>
    </div>
  )
}

function RowClient () {
  return (
    <>
      <Input key='name' label='Nombre (s)' labelPlacement='outside' placeholder='Ingresa tu nombre' />
      <Input key='apellido' label='Apellido' labelPlacement='outside' placeholder='Ingresa tu apellido' />
    </>
  )
}

export function FormShip ({ title }) {
  const [selectedClient, setSelectedClient] = useState()
  return (
    (
      <section className={Styles.containerMainForm}>
        <header className={Styles.rowContainer}>
          <p>Datos de {title}</p>
          <Tabs color='white' selectedKey={selectedClient} onSelectionChange={setSelectedClient}>
            <Tab key='cliente' title='Cliente' />
            <Tab key='empresa' title='Empresa' />
          </Tabs>
        </header>
        <body className={Styles.containerForm}>
          <body className={Styles.containerForm}>
            <Select key='registrado' label='Selecciona el usuario registrado' labelPlacement='outside' placeholder='Clickea para empezar a buscar' />
            <div className={Styles.rowContainer}>
              {
                selectedClient === 'cliente'
                  ? <RowClient />
                  : <Input key='empresa' label='Empresa' labelPlacement='outside' placeholder='Ingresa el nombre de empresa' />
              }
              <Input key='telefono' label='Telefono' labelPlacement='outside' placeholder='Ingresa tu telefono' />
            </div>
            <div className={Styles.rowContainer}>
              <Input key='correo' label='Email' type='email' labelPlacement='outside' placeholder='Ingresa tu correo' />
            </div>
            <div className={Styles.rowContainer}>
              <Input key='calle' label='Calle' labelPlacement='outside' placeholder='Ingresa tu calle' />
            </div>
            <div className={Styles.rowContainer}>
              <Input key='numeroExt' label='Numero exterior' labelPlacement='outside' placeholder='Ingresa el numero exterior' />
              <Input key='numeroInt' label='Numero interior' labelPlacement='outside' placeholder='Ingresa el numero interior' />
            </div>
            <div className={Styles.rowContainer}>
              <Input key='referencias' label='Referencias' labelPlacement='outside' placeholder='Ingresa las referencias de la direccion' />
              <Input key='cp' label='Codigo postal' labelPlacement='outside' placeholder='Ingresa el codigo postal' />
            </div>
            <div className={Styles.rowContainer}>
              <Select key='colonia' label='Colonia' labelPlacement='outside' placeholder='Selecciona una colonia' />
            </div>
            <div className={Styles.rowContainer}>
              <Input key='municipio' label='Municipio' labelPlacement='outside' placeholder='Ingresa el municipio' />
              <Input key='estado' label='Estado' labelPlacement='outside' placeholder='Ingresa el estado' />
            </div>
          </body>
        </body>
        <footer className={Styles.rowHorizontal}>
          <Checkbox color='success'>Guardar cliente</Checkbox>
          {
            title === 'destino'
              ? <RowButton />
              : <></>
          }
        </footer>
      </section>
    )
  )
}
