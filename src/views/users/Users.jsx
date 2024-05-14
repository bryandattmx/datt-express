import { DataTable } from '../../components/DataTableUsers'
import Styles from './Users.module.css'

export function Users () {
  return (
    <main className={Styles.container}>
      <DataTable type='usuario' />
    </main>
  )
}
