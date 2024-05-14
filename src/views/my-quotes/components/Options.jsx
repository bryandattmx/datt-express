import { Tooltip, Button } from '@nextui-org/react'
import { GiCancel } from 'react-icons/gi'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

export function DeleteQuoteButton () {
  return (
    <Tooltip content='Eliminar cotizacion' color='danger'>
      <Button color='danger' isIconOnly>
        <GiCancel />
      </Button>
    </Tooltip>
  )
}

function ContentTooltipo () {
  return (
    <p style={{ color: 'white' }}>Finalizar el pedido</p>
  )
}

export function FinishQuoteButton () {
  return (
    <Tooltip color='success' content={<ContentTooltipo />}>
      <Button color='success' isIconOnly style={{ color: 'white', fontSize: '1.25rem' }}>
        <IoCheckmarkDoneOutline />
      </Button>
    </Tooltip>
  )
}
