import { DataTable } from '../../components/DataTableUsers'
import Styles from './Clients.module.css'

export function Clients () {
  return (
    <main className={Styles.container}>
      <DataTable type='cliente' />
    </main>
  )
}
