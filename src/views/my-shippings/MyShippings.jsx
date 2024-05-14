import { useCallback } from 'react'
import { Input, Table, TableHeader, TableColumn, TableRow, TableBody, TableCell, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, RangeCalendar, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import { IoIosSearch } from 'react-icons/io'
import { FaChevronDown } from 'react-icons/fa'
import { BiExport } from 'react-icons/bi'
import { StatusItem } from '../../components/StatusShipment'
import { CancelMyShipment } from './components/Options'
import { today, getLocalTimeZone } from '@internationalized/date'
import Styles from './MyShippings.module.css'

const packages = [
  {
    id: '1234567890',
    client: 'Cliente 1',
    type: 'Caja',
    status: 'Entregado',
    weight: '1.2 kg',
    date: '2024-04-28',
    service: 'Estándar',
    price: '$10.99',
    options: '1234567890'
  },
  {
    id: '2345678901',
    client: 'Cliente 2',
    type: 'Caja',
    status: 'Tránsito',
    weight: '5.8 kg',
    date: '2024-04-30',
    service: 'Express',
    price: '$25.99'
  },
  {
    id: '3456789012',
    client: 'Cliente 3',
    type: 'Sobre',
    status: 'Pendiente',
    weight: '0.5 kg',
    date: '2024-04-25',
    service: 'Estándar',
    price: '$8.99'
  },
  {
    id: '4567890123',
    client: 'Cliente 4',
    type: 'Sobre',
    status: 'Entregado',
    weight: '0.2 kg',
    date: '2024-04-29',
    service: 'Express',
    price: '$6.99'
  }
]

const columns = [
  {
    key: 'id',
    label: 'Numero de guia'
  },
  {
    key: 'client',
    label: 'Cliente'
  },
  {
    key: 'type',
    label: 'Tipo de envio'
  },
  {
    key: 'weight',
    label: 'Peso'
  },
  {
    key: 'status',
    label: 'Estatus'
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
    label: 'Precio'
  },
  {
    key: 'options',
    label: 'options'
  }
]

export function MyShippings () {
  const renderCell = useCallback((shipment, columnKey) => {
    const cellValue = shipment[columnKey]
    switch (columnKey) {
      case 'status':
        return <StatusItem value={cellValue} />
      case 'options':
        return <CancelMyShipment id={cellValue} />
      default:
        return cellValue
    }
  })
  return (
    <main className={Styles.container}>
      <section className={Styles.cardContent}>
        <header className={Styles.headerContainer}>
          <Input placeholder='Buscar mi pedido' variant='bordered' startContent={<IoIosSearch />} />
          <Dropdown>
            <DropdownTrigger>
              <Button color='danger' endContent={<FaChevronDown className='text-small' />}>Status</Button>
            </DropdownTrigger>
            <DropdownMenu selectionMode='single'>
              <DropdownItem key='pendiente'>Pendiente</DropdownItem>
              <DropdownItem key='transito'>Transito</DropdownItem>
              <DropdownItem key='entregado'>Entregado</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Popover>
            <PopoverTrigger>
              <Button color='primary' endContent={<FaChevronDown className='text-small' />}>Hoy</Button>
            </PopoverTrigger>
            <PopoverContent>
              <RangeCalendar defaultValue={{ start: today(getLocalTimeZone()), end: today(getLocalTimeZone()) }} />
            </PopoverContent>
          </Popover>
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
