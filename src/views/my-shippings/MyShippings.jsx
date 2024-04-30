import { Input, Table, TableHeader, TableColumn, TableRow, TableBody, TableCell, getKeyValue, Select, Button } from '@nextui-org/react'
import { IoIosSearch } from 'react-icons/io'
import { FaChevronDown } from 'react-icons/fa'
import Styles from './MyShippings.module.css'

const rows = [
  {
    key: '1',
    name: 'Tony Reichert',
    role: 'CEO',
    status: 'Active'
  },
  {
    key: '2',
    name: 'Zoey Lang',
    role: 'Technical Lead',
    status: 'Paused'
  },
  {
    key: '3',
    name: 'Jane Fisher',
    role: 'Senior Developer',
    status: 'Active'
  },
  {
    key: '4',
    name: 'William Howard',
    role: 'Community Manager',
    status: 'Vacation'
  }
]

const columns = [
  {
    key: 'name',
    label: 'NAME'
  },
  {
    key: 'role',
    label: 'ROLE'
  },
  {
    key: 'status',
    label: 'STATUS'
  }
]

export function MyShippings () {
  return (
    <main className={Styles.container}>
      <section className={Styles.cardContent}>
        <header className={Styles.headerContainer}>
          <Input placeholder='Buscar mi pedido' variant='bordered' startContent={<IoIosSearch />} />
          <Button endContent={<FaChevronDown className='text-small' />} variant='flat'>Status</Button>
          <Button>Exportar</Button>
        </header>
        <Table aria-label='Example table with dynamic content'>
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </main>
  )
}
