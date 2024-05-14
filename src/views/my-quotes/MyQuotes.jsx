import { useCallback } from 'react'
import { Input, Table, TableHeader, TableColumn, TableRow, TableBody, TableCell, Button } from '@nextui-org/react'
import { StatusItem } from '../../components/StatusShipment'
import { DeleteQuoteButton, FinishQuoteButton } from './components/Options'
import Styles from '../my-shippings/MyShippings.module.css'
import { IoIosSearch } from 'react-icons/io'
import { BiExport } from 'react-icons/bi'

const packages = [
  {
    id: '1234567890',
    type: 'Caja',
    weight: '1.2 kg',
    date: '2024-04-28',
    service: 'Estándar',
    price: '$10.99'
  },
  {
    id: '2345678901',
    type: 'Caja',
    weight: '5.8 kg',
    date: '2024-04-30',
    service: 'Express',
    price: '$25.99'
  },
  {
    id: '3456789012',
    type: 'Sobre',
    weight: '0.5 kg',
    date: '2024-04-25',
    service: 'Estándar',
    price: '$8.99'
  },
  {
    id: '4567890123',
    type: 'Sobre',
    weight: '0.2 kg',
    date: '2024-04-29',
    service: 'Express',
    price: '$6.99'
  }
]

const columns = [
  {
    key: 'type',
    label: 'Tipo de Paquete'
  },
  {
    key: 'weight',
    label: 'Peso'
  },
  {
    key: 'date',
    label: 'Fecha'
  },
  {
    key: 'service',
    label: 'Servicio seleccionado'
  },
  {
    key: 'price',
    label: 'Costo'
  },
  {
    key: 'options',
    label: 'Opciones'
  }
]

export function MyQuotes () {
  const renderCell = useCallback((shipment, columnKey) => {
    const cellValue = shipment[columnKey]
    switch (columnKey) {
      case 'status':
        return <StatusItem value={cellValue} />
      case 'options':
        return (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <FinishQuoteButton />
            <DeleteQuoteButton />
          </div>
        )
      default:
        return cellValue
    }
  })
  return (
    <main className={Styles.container}>
      <section className={Styles.cardContent}>
        <header className={Styles.headerContainer}>
          <Input placeholder='Buscar mi pedido' variant='bordered' startContent={<IoIosSearch />} />
          <Button color='success' style={{ color: 'white' }}>Exportar <BiExport style={{ fontSize: '1.25rem' }} /></Button>
        </header>
        <Table aria-label='Data Table de mis envios' isStriped removeWrapper>
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={packages}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </main>
  )
}
