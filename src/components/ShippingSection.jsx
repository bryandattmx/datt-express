import { Select, SelectItem, Avatar, Input, Tooltip } from '@nextui-org/react'
import { FaLocationDot } from 'react-icons/fa6'
import Styles from './styles/ShippingSection.module.css'
import countries from '../assets/countries.json'

function IconOrigen () {
  return (
    <div className={Styles.iconContainer}>
      <div className={Styles.icon} />
    </div>
  )
}

export function ShippingSection ({ tipo }) {
  return (
    <section className={Styles.container}>
      <div className={Styles.containerLocation}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor={`select-${tipo}`} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontWeight: '500', color: 'var(--textColor)' }}>
            {tipo === 'origen' ? <IconOrigen /> : <div className={Styles.iconContainer}><FaLocationDot style={{ width: '10px', height: '10px', color: 'var(--primaryColor)' }} /></div>}
            {tipo === 'origen' ? 'Origen' : 'Destino'}
          </label>
          <div className={Styles.containerRowLocation}>
            <Select
              id={`select-${tipo}`}
              aria-label={`select-${tipo}`}
              defaultSelectedKeys={tipo === 'origen' ? [1] : [2]}
              items={countries}
              renderValue={(items) => {
                return items.map((item) => (
                  <div key={item.data.id} style={{ display: 'flex' }}>
                    <Avatar src={item.data.bandera_url} alt={item.data.nombre} size='sm' />
                  </div>
                ))
              }}
            >
              {(country) => (
                <SelectItem key={country.id} textValue={country.nombre}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '400' }}>
                    <Tooltip content={country.nombre}>
                      <Avatar src={country.bandera_url} alt={country.nombre} size='sm' />
                    </Tooltip>
                  </div>
                </SelectItem>

              )}
            </Select>
            <Input variant='bordered' aria-label='inputToZipCode' />
          </div>
        </div>
      </div>
    </section>
  )
}
