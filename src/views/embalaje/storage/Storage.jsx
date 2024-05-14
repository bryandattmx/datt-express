import { useCallback } from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Input, Button, Pagination, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import Styles from './Storage.module.css'
import { FaPlus } from 'react-icons/fa6'
import { HiOutlineDotsVertical, HiOutlinePaperAirplane } from 'react-icons/hi'
import { AiOutlineDelete } from 'react-icons/ai'

function OptionsProduct () {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='light' isIconOnly>
          <HiOutlineDotsVertical />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem startContent={<HiOutlinePaperAirplane style={{ fontSize: '1.125rem' }} />}>
          <p>Solicitar compra</p>
        </DropdownItem>
        <DropdownItem color='danger' startContent={<AiOutlineDelete style={{ fontSize: '1.125rem' }} />}>
          <p>Eliminar</p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

function Paginator () {
  return (
    <div className='flex w-full justify-center'>
      <Pagination isCompact showControls showShadow color='success' page={1} total={20} />
    </div>
  )
}

export function Storage () {
  const productosEmbalaje = [
    {
      id: 1,
      nombre: 'Caja de cartón pequeña',
      dimensiones: '20x20x20 cm',
      capacidad: '5 kg',
      imagen: 'ruta/imagen_caja_pequena.jpg',
      options: 1
    },
    {
      id: 2,
      nombre: 'Caja de cartón mediana',
      dimensiones: '30x30x30 cm',
      capacidad: '10 kg',
      imagen: 'ruta/imagen_caja_mediana.jpg',
      options: 2
    },
    {
      id: 3,
      nombre: 'Caja de cartón grande',
      dimensiones: '40x40x40 cm',
      capacidad: '20 kg',
      imagen: 'ruta/imagen_caja_grande.jpg',
      options: 3
    },
    {
      id: 4,
      nombre: 'Cinta adhesiva transparente',
      longitud: '50 m',
      ancho: '5 cm',
      imagen: 'ruta/imagen_cinta_adhesiva.jpg',
      options: 4
    },
    {
      id: 5,
      nombre: 'Relleno de espuma',
      tipo: 'Espuma de polietileno',
      cantidad: '1 m³',
      imagen: 'ruta/imagen_relleno_espuma.jpg',
      options: 5
    },
    {
      id: 6,
      nombre: 'Etiquetas de envío',
      cantidad: '100 unidades',
      imagen: 'ruta/imagen_etiquetas_envio.jpg',
      options: 6
    },
    {
      id: 7,
      nombre: 'Film estirable manual',
      longitud: '300 m',
      grosor: '23 micras',
      imagen: 'ruta/imagen_film_estirable_manual.jpg',
      options: 7
    }
  ]

  const columns = [
    {
      key: 'id',
      label: 'ID'
    },
    {
      key: 'nombre',
      label: 'Producto'
    },
    {
      key: 'options',
      label: 'opciones'
    }
  ]

  const renderCell = useCallback((shipment, columnKey) => {
    const cellValue = shipment[columnKey]
    switch (columnKey) {
      case 'status':
        return <p value={cellValue} />
      case 'options':
        return <OptionsProduct />
      default:
        return cellValue
    }
  })
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <header className={Styles.header}>
          <Button color='success' style={{ color: 'white' }} startContent={<FaPlus />}>Agregar producto</Button>
          <Input variant='bordered' placeholder='Buscar producto' />
          <Button variant='flat'>Filtro</Button>
          <Button variant='flat' color='primary'>Estatus</Button>
        </header>
        <Table aria-label='Data Table de mis envios' isStriped removeWrapper bottomContent={<Paginator />} className='justify-between h-full'>
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={productosEmbalaje}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
