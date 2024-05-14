import { useState } from 'react'
import { ModalDetailShip } from '../../../components/ModalDetailShip'
import { Button, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, modal } from '@nextui-org/react'
import { AiOutlinePrinter } from 'react-icons/ai'
import { FaRegEye } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Styles from '../styles/Options.module.css'

export function CancelMyShipment ({ id }) {
  const [modalDetalle, setModalDetalle] = useState(false)

  return (
    <>
      <ModalDetailShip isActive={modalDetalle} setActive={setModalDetalle} />
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly variant='light'>
            <BsThreeDotsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu onAction={() => setModalDetalle(!modalDetalle)}>
          <DropdownItem key={`${id}-optionDetalle`} textValue='Detalle'>
            <div className={Styles.itemDropdown}>
              <FaRegEye style={{ fontSize: '1.125rem' }} />
              <p>Ver detalle</p>
            </div>
          </DropdownItem>
          <DropdownItem key={`${id}-optionImprimir`} textValue='Imprimir'>
            <div className={Styles.itemDropdown}>
              <AiOutlinePrinter style={{ fontSize: '1.125rem' }} />
              <p>Imprimir</p>
            </div>
          </DropdownItem>
          <DropdownItem key={`${id}-optionEliminar`} color='danger' textValue='Eliminar'>
            <div className={Styles.itemDropdown}>
              <MdOutlineDelete style={{ fontSize: '1.125rem' }} />
              <p>Eliminar</p>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}
