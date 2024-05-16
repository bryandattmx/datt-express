import Styles from '../styles/Card.module.css'

export function ProductItem ({ product }) {
  console.log(product)
  return (
    <article className={Styles.container}>
      <div className={Styles.imageContainer} />
      <div className={Styles.textInfo}>
        <p className={Styles.titleProduct}>{product.nombre}</p>
        <span className={Styles.textValue}>$150</span>
      </div>
    </article>
  )
}
