import { useState } from 'react'
import { Button, Divider, Input } from '@nextui-org/react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Styles from '../styles/ResumeCart.module.css'

function ProductOnCart () {
  const [amount, setAmount] = useState(0)
  return (
    <article className={Styles.containerProductOnCart}>
      <div style={{ display: 'flex', gap: '0.875rem' }}>
        <div>
          <p className={Styles.titleProduct}>Caja</p>
          <span className={Styles.subtitleProduct}>16 x 16 x 16</span>
        </div>
      </div>
      <div className={Styles.containerNumberProduct}>
        <Button isDisabled={amount === 0} size='sm' variant='light' radius='sm' isIconOnly onPress={() => setAmount(amount - 1)}><FaMinus /></Button>
        <Input value={amount} isReadOnly size='sm' radius='sm' style={{ textAlign: 'center', fontWeight: '500' }} />
        <Button isDisabled={amount === 10} size='sm' variant='light' radius='sm' isIconOnly onPress={() => setAmount(amount + 1)}><FaPlus /></Button>
      </div>
      <p style={{ fontWeight: '500' }}>$90</p>
      <Button isIconOnly variant='flat' size='sm' color='danger'>
        <MdOutlineDeleteOutline style={{ fontSize: '1.25rem' }} />
      </Button>
    </article>
  )
}

export function ResumeCart () {
  return (
    <div className={Styles.container}>
      <header className={Styles.containerHeader}>
        <p>Vista previa</p>
      </header>
      <Divider />
      <section className={Styles.containerBody}>
        <ProductOnCart />
        <ProductOnCart />
      </section>
      <footer className={Styles.containerFooter}>
        <Divider />
        <div className={Styles.containerRow}>
          <p>Subtotal</p>
          <span className={Styles.valueSpan}>$546</span>
        </div>
        <div className={Styles.containerRow}>
          <p>IVA (16%)</p>
          <span className={Styles.valueSpan}>$36</span>
        </div>
        <Divider />
        <div className={Styles.containerRow}>
          <p>Total a cobrar</p>
          <span className={Styles.valueSpan}>$36</span>
        </div>
        <div className={Styles.containerFooterGrid}>
          <Button variant='bordered' color='success'>Vista previa</Button>
          <Button color='success' style={{ color: 'white' }}>Pagar</Button>
        </div>
      </footer>
    </div>
  )
}
