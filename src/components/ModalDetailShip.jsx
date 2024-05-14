import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { FormShipDetail } from '../views/my-shippings/components/FormDetail'

export function ModalDetailShip ({ isActive, setActive }) {
  return (
    <Modal isOpen={isActive} onOpenChange={() => setActive(!isActive)} size='5xl'>
      <ModalContent>
        <ModalHeader>Detalle de mi envio</ModalHeader>
        <ModalBody>
          <section style={{ display: 'flex', gap: '1rem' }}>
            <FormShipDetail title='Origen' />
            <FormShipDetail title='Destino' />
          </section>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
