import { Listbox, Button, Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, ListboxItem } from '@nextui-org/react'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { MdModeEditOutline, MdOutlineDelete, MdBubbleChart } from 'react-icons/md'
import { FaTape, FaPlus } from 'react-icons/fa6'
import Styles from '../styles/Scrollbar.module.css'
import { useState } from 'react'

function ButtonDots () {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant='light' size='sm'>
          <HiOutlineDotsVertical />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem color='success' startContent={<FaPlus />}>Agregar producto</DropdownItem>
        <DropdownItem startContent={<MdModeEditOutline />}>Editar servicio</DropdownItem>
        <DropdownItem color='danger' startContent={<MdOutlineDelete />}>Eliminar servicio</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

function ButtonsItemInside () {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size='sm' isIconOnly variant='light'><HiOutlineDotsVertical /></Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem variant='flat' color='danger' startContent={<MdOutlineDelete style={{ fontSize: '1.125rem' }} />}>Eliminar</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

function ListItems () {
  return (
    <Listbox className={Styles.containerList}>
      <ListboxItem variant='flat'>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <section style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <GiCardboardBoxClosed style={{ fontSize: '1.25rem', color: 'var(--textColor)' }} />
            <p style={{ color: 'var(--textColor)', fontWeight: '500' }}>Caja</p>
          </section>
          <ButtonsItemInside />
        </div>
      </ListboxItem>
      <ListboxItem variant='flat'>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <section style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <MdBubbleChart style={{ fontSize: '1.25rem', color: 'var(--textColor)' }} />
            <p style={{ color: 'var(--textColor)', fontWeight: '500' }}>Papel burbuja</p>
          </section>
          <ButtonsItemInside />
        </div>
      </ListboxItem>
      <ListboxItem variant='flat'>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <section style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <FaTape style={{ fontSize: '1.25rem', color: 'var(--textColor)' }} />
            <p style={{ color: 'var(--textColor)', fontWeight: '500' }}>Cinta</p>
          </section>
          <ButtonsItemInside />
        </div>
      </ListboxItem>
    </Listbox>
  )
}

export function CardProduct ({ product }) {
  const [scroll, setScroll] = useState(false)
  const descripcion = 'Servicio con caja de cartón corrugado resistente.'
  return (
    <Card shadow='sm' isPressable onPress={() => setScroll(!scroll)}>
      <CardHeader>
        <div style={{ width: '100%', height: '100%' }}>
          <section style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GiCardboardBoxClosed style={{ fontSize: '1.25rem', color: 'var(--primaryColor)' }} />
              <p style={{ fontWeight: '500' }}>12 X 12 X 12</p>
            </div>
            <ButtonDots />
          </section>
          {!scroll ? <p style={{ width: '100%', fontSize: '0.75rem', textAlign: 'start' }}>{descripcion}</p> : ''}
        </div>
      </CardHeader>
      {
        scroll
          ? <CardBody><ListItems /></CardBody>
          : ''
      }
    </Card>
  )
}
