import { Input } from '@nextui-org/react'

import Styles from '../styles/Form.module.css'

function RowClient () {
  return (
    <>
      <Input readOnly key='name' label='Nombre (s)' labelPlacement='outside' placeholder='Ingresa tu nombre' />
      <Input readOnly key='apellido' label='Apellido' labelPlacement='outside' placeholder='Ingresa tu apellido' />
    </>
  )
}

export function FormShipDetail ({ title }) {
  return (
    (
      <section className={Styles.containerMainForm}>
        <body className={Styles.containerForm}>
          <body className={Styles.containerForm}>
            <p style={{ fontWeight: '500' }}>{title}</p>
            <div className={Styles.rowContainer}>
              {
                title === 'cliente'
                  ? <RowClient />
                  : <Input readOnly key='empresa' label='Empresa' labelPlacement='outside' placeholder='Ingresa el nombre de empresa' />
              }
              <Input readOnly key='telefono' label='Telefono' labelPlacement='outside' placeholder='Ingresa tu telefono' />
            </div>
            <div className={Styles.rowContainer}>
              <Input readOnly key='correo' label='Email' type='email' labelPlacement='outside' placeholder='Ingresa tu correo' />
            </div>
            <div className={Styles.rowContainer}>
              <Input readOnly key='calle' label='Calle' labelPlacement='outside' placeholder='Ingresa tu calle' />
            </div>
            <div className={Styles.rowContainer}>
              <Input readOnly key='numeroExt' label='Numero exterior' labelPlacement='outside' placeholder='Ingresa el numero exterior' />
              <Input readOnly key='numeroInt' label='Numero interior' labelPlacement='outside' placeholder='Ingresa el numero interior' />
            </div>
            <div className={Styles.rowContainer}>
              <Input readOnly key='referencias' label='Referencias' labelPlacement='outside' placeholder='Ingresa las referencias de la direccion' />
              <Input readOnly key='cp' label='Codigo postal' labelPlacement='outside' placeholder='Ingresa el codigo postal' />
            </div>
            <div className={Styles.rowContainer}>
              <Input readOnly key='colonia' label='Colonia' labelPlacement='outside' placeholder='Selecciona una colonia' />
            </div>
            <div className={Styles.rowContainer}>
              <Input readOnly key='municipio' label='Municipio' labelPlacement='outside' placeholder='Ingresa el municipio' />
              <Input readOnly key='estado' label='Estado' labelPlacement='outside' placeholder='Ingresa el estado' />
            </div>
          </body>
        </body>
      </section>
    )
  )
}
