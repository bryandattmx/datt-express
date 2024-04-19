import { Tabs, Tab, Input } from '@nextui-org/react'
import { LuUser2, LuBuilding2 } from 'react-icons/lu'
import { FaLocationDot } from 'react-icons/fa6'
import Styles from './styles/ShippingSection.module.css'

export function ShippingSection ({ tipo }) {
  return (
    <section className={Styles.container}>
      <div className={Styles.decorativeSection} style={tipo === 'origen' ? { flexDirection: 'column-reverse' } : { flexDirection: 'column' }}>
        <div className={Styles.lines} />
        <div className={Styles.circle}>
          {
            tipo === 'origen'
              ? <div className={Styles.circleSmall} />
              : <FaLocationDot style={{ color: 'var(--primaryColor)', fontSize: '20px' }} />
          }
        </div>
        <div />
      </div>
      <div className={Styles.containerLocation}>
        <header className={Styles.header}>
          <p className={Styles.title}>{tipo === 'origen' ? 'Realizar' : 'Recibir'} un envio como...</p>
          <Tabs color='dafault'>
            <Tab title={<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><LuUser2 /><span>Cliente</span></div>} />
            <Tab title={<div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><LuBuilding2 /><span>Empresa</span></div>} />
          </Tabs>
        </header>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontWeight: '500', color: 'var(--textColor)' }}>{tipo === 'origen' ? 'Origen' : 'Destino'}</label>
          <Input variant='bordered' />
        </div>
      </div>
    </section>
  )
}
