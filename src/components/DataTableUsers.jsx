import { useState } from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { MdEdit, MdOutlineDelete } from 'react-icons/md'
import { ModalUsers } from './ModalUsers'
import Styles from './styles/DataTableUsers.module.css'

export function DataTable ({ type }) {
  const [active, setActive] = useState(false)
  return (
    <main className={Styles.container}>
      <ModalUsers active={active} setActive={setActive} type={type} />
      <header className={Styles.header}>
        <Input variant='bordered' label={`Buscar ${type}`} />
        <Button color='success' style={{ color: 'white' }} onPress={() => setActive(!active)}><FaPlus style={{ fontSize: '1.5rem' }} /> Agregar {type}</Button>
      </header>
      <Table removeWrapper>
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Apellido</TableColumn>
          <TableColumn>email</TableColumn>
          <TableColumn>Opciones</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Sergio</TableCell>
            <TableCell>Perez</TableCell>
            <TableCell>sergio.perez@rbracing.com</TableCell>
            <TableCell>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant='light' isIconOnly>
                    <BsThreeDotsVertical />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem startContent={<MdEdit style={{ fontSize: '1.15rem' }} />}>Editar</DropdownItem>
                  <DropdownItem color='danger' startContent={<MdOutlineDelete style={{ fontSize: '1.15rem' }} />}>Eliminar</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}
