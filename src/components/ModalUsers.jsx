import { Modal, ModalHeader, ModalContent, ModalBody, ModalFooter, Input, Button } from '@nextui-org/react'

export function ModalUsers ({ type, active, setActive }) {
  return (
    <Modal isOpen={active} onOpenChange={() => setActive(!active)} size='5xl'>
      <ModalContent>
        <ModalHeader>{`Agregar un ${type}`}</ModalHeader>
        <ModalBody>
          <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
            <header style={{ display: 'flex', gap: '1rem' }}>
              <Input variant='bordered' label='Nombre' />
              <Input variant='bordered' label='Apellido' />
            </header>
            <Input variant='bordered' label='Email' />
          </section>
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='light' onPress={() => setActive(!active)}>Cancelar</Button>
          <Button color='success' style={{ color: 'white' }} onPress={() => setActive(!active)}>Agregar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
