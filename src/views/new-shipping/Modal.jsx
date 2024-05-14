import { Modal, ModalContent, ModalBody, ModalHeader, ModalFooter, useDisclosure, Button, Input } from '@nextui-org/react'

export function ModalPackage () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div>
      <Button onPress={onOpen}>Agregar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl'>
        <ModalContent>
          {(onclose) => (
            <>
              <ModalHeader>Agregar paquete</ModalHeader>
              <ModalBody>
                <div>
                  <header style={{ display: 'flex', gap: '1rem' }}>
                    <Input label='Cantidad' type='number' variant='bordered' />
                    <Input label='Largo' type='number' variant='bordered' />
                    <Input label='Ancho' type='number' variant='bordered' />
                    <Input label='Alto' type='number' variant='bordered' />
                  </header>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onclose}>Cerrar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
