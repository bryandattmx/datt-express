import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@nextui-org/react'
import { ModalPresetServices } from '../../../components/ModalPresetServices'
import { FaPlus } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useState } from 'react'

export function FormPresetShipping () {
  const [activeModalServicio, setModalServicio] = useState(false)
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ModalPresetServices isActive={activeModalServicio} setActive={() => setModalServicio(!activeModalServicio)} />
      <header style={{ display: 'flex', gap: '1rem' }}>
        <Button color='success' style={{ color: 'white' }} onPress={() => setModalServicio(!activeModalServicio)} startContent={<FaPlus />}>Agregar servicio</Button>
        <Button color='danger' startContent={<FaPlus />}>Agregar caja</Button>
      </header>
      <Table aria-label='Example static collection table' removeWrapper>
        <TableHeader>
          <TableColumn>Cantidad</TableColumn>
          <TableColumn>Paquete</TableColumn>
          <TableColumn>Largo</TableColumn>
          <TableColumn>Ancho</TableColumn>
          <TableColumn>Alto</TableColumn>
          <TableColumn>Valor agregado</TableColumn>
          <TableColumn>Opciones</TableColumn>
        </TableHeader>
        <TableBody emptyContent='Aun no agregas un paquete a la cotizacion'>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>14 X 14 X 14 Doblete</TableCell>
            <TableCell>13</TableCell>
            <TableCell>13</TableCell>
            <TableCell>13</TableCell>
            <TableCell>$160</TableCell>
            <TableCell><BsThreeDotsVertical /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
