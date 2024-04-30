import { Input } from '@nextui-org/react'
import Styles from './styles/ShippingSection.module.css'

export function ShippingSection ({ tipo }) {
  return (
    <section className={Styles.container}>
      <div className={Styles.containerLocation}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontWeight: '500', color: 'var(--textColor)' }}>{tipo === 'origen' ? 'Origen' : 'Destino'}</label>
          <Input variant='bordered' />
        </div>
      </div>
    </section>
  )
}
