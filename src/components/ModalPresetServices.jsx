import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Table, TableColumn, TableHeader, TableBody, Select, SelectItem, TableRow, TableCell } from '@nextui-org/react'
import { PresetService } from './PresetService'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdChevronRight } from 'react-icons/md'
import Styles from './styles/ModalPresetServices.module.css'

export function ModalPresetServices ({ isActive, setActive }) {
  return (
    <Modal isOpen={isActive === 'preset'} onOpenChange={setActive} style={{ maxWidth: '1400px' }}>
      <ModalContent>
        <ModalHeader>Agregar servicio</ModalHeader>
        <ModalBody>
          <main style={{ width: '100%', height: '100%', display: 'flex', gap: '2rem' }}>
            <section style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <header className={Styles.header}>
                <div className={Styles.headerContent}>
                  <Input variant='bordered' color='success' label='Cantidad' type='number' size='sm' />
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Input variant='bordered' color='success' label='Peso' type='number' size='sm' />
                    <Select placeholder='Lbs' variant='bordered' color='success' size='lg'>
                      <SelectItem>Lbs</SelectItem>
                      <SelectItem>Kg</SelectItem>
                    </Select>
                  </div>
                  <Input variant='bordered' color='success' label='Valor declarado' type='number' size='sm' />
                </div>
                <div className={Styles.containerInfoCalc}>
                  <p className={Styles.textGrid}>Peso masa <span className={Styles.textGridValue}>5 Kg</span></p>
                  <p className={Styles.textGrid}>Peso volumetrico<span className={Styles.textGridValue}>1 Kg</span></p>
                  <p className={Styles.textGrid}>Peso a cotizar<span className={Styles.textGridValue}>5 Kg</span></p>
                </div>
              </header>
              <div style={{ width: '100%', border: '1px solid #F1F1F1', borderRadius: '2px' }} />
              <ul className={Styles.containerServices}>
                <li>
                  <PresetService />
                </li>
                <li>
                  <PresetService />
                </li>
                <li>
                  <PresetService />
                </li>
              </ul>
            </section>
            <section style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input label='Contenido del paquete' size='sm' variant='bordered' color='success' />
              <Table aria-label='Example static collection table' removeWrapper>
                <TableHeader>
                  <TableColumn>Descripcion</TableColumn>
                  <TableColumn>USA ID</TableColumn>
                  <TableColumn>MEX ID</TableColumn>
                  <TableColumn>Opciones</TableColumn>
                </TableHeader>
                <TableBody emptyContent='Aun no agregas un paquete a la cotizacion'>
                  <TableRow>
                    <TableCell>
                      Chamarras
                    </TableCell>
                    <TableCell>01200</TableCell>
                    <TableCell>02200</TableCell>
                    <TableCell>
                      <Button variant='light' isIconOnly>
                        <BsThreeDotsVertical />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>
          </main>
        </ModalBody>
        <ModalFooter style={{ borderTop: '1px solid #CCCCCC' }}>
          <Button onPress={() => setActive('product')} color='success' variant='shadow' style={{ color: 'white' }}>
            Siguiente
            <MdChevronRight style={{ fontSize: '1.25rem' }} />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
