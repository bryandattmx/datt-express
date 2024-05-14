import { ProductItem } from './CardProduct'
import Styles from '../styles/AllProducts.module.css'
import productosEmbalaje from '../resources/products.json'

console.log(productosEmbalaje)

export function AllProducts () {
  return (
    <div className={Styles.container}>
      <p className={Styles.textTitles}>Productos más vendidos</p>
      <section className={Styles.containerMostSells}>
        {productosEmbalaje.slice(0, 5).map(producto => (
          <ProductItem key={producto.id} product={producto} />
        ))}
      </section>
      <p className={Styles.textTitles}>Todos los productos</p>
      <section className={Styles.containerAllProducts}>
        {productosEmbalaje.map(producto => (
          <ProductItem key={producto.id} product={producto} />
        ))}
      </section>
    </div>
  )
}
