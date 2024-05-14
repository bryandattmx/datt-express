import { Input } from '@nextui-org/react'
import { ResumeCart } from './components/ResumeCart'
import { AllProducts } from './components/AllProdcucts'
import Styles from './Styles.module.css'

export function Embalaje () {
  return (
    <div className={Styles.container}>
      <div style={{ width: '70%' }}>
        <header className={Styles.header}>
          <div className={Styles.headerContent}>
            <Input variant='bordered' placeholder='Busca un producto' />
          </div>
        </header>
        <section className={Styles.containerBody}>
          <AllProducts />
        </section>
      </div>
      <ResumeCart />
    </div>
  )
}
