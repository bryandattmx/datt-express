import { SelectItem, Input, Select, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, Divider } from '@nextui-org/react'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import Styles from '../../../components/styles/ShoppingSectionWeight.module.css'
import { useState } from 'react'

function SelectedCustom ({ isSobre, setSobre }) {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <label>Tipo de envio</label>
      <Select placeholder='Caja - Sobre' size='sm' variant='bordered'>
        <SelectItem onPress={() => setSobre(!isSobre)}>Sobre</SelectItem>
        <SelectItem onPress={() => setSobre(false)}>Caja</SelectItem>
        <SelectItem onPress={() => setSobre(false)}>Pallet</SelectItem>
      </Select>
    </div>
  )
}

function Cantidad () {
  return (
    <div id='cantidad'>
      <label>Cantidad</label>
      <Input placeholder='0' type='number' size='sm' variant='bordered' />
    </div>
  )
}

function Medidas () {
  return (
    <section id='medidas' className={Styles.containerInfoWeight}>
      <div className={Styles.containerDimensiones}>
        <div>
          <label>Largo</label>
          <div className={Styles.containersWithOptions}>
            <Input size='sm' type='number' variant='bordered' />
            <Select placeholder='Inch' size='sm' fullWidth={false} variant='bordered'>
              <SelectItem>Inch</SelectItem>
              <SelectItem>Cm</SelectItem>
            </Select>
          </div>
        </div>
        <div>
          <label>Ancho</label>
          <div className={Styles.containersWithOptions}>
            <Input size='sm' type='number' variant='bordered' />
            <Select placeholder='Inch' size='sm' fullWidth={false} variant='bordered'>
              <SelectItem>Inch</SelectItem>
              <SelectItem>Cm</SelectItem>
            </Select>
          </div>
        </div>
        <div>
          <label>Alto</label>
          <div className={Styles.containersWithOptions}>
            <Input size='sm' type='number' variant='bordered' />
            <Select placeholder='Inch' size='sm' variant='bordered'>
              <SelectItem>Inch</SelectItem>
              <SelectItem>cm</SelectItem>
            </Select>
          </div>
        </div>
      </div>
    </section>
  )
}

function Peso () {
  return (
    <div id='Peso' style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <label>Peso</label>
      <div className={Styles.containersWithOptions}>
        <Input placeholder='0' size='sm' type='number' variant='bordered' />
        <Select placeholder='Lbs' size='sm' fullWidth={false} variant='bordered'>
          <SelectItem>Lbs</SelectItem>
          <SelectItem>Kg</SelectItem>
        </Select>
      </div>
    </div>
  )
}

function ValorDeclarado () {
  return (
    <div id='valorDeclarado'>
      <label>Valor declarado</label>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Input placeholder='$0' size='sm' variant='bordered' />
        <Select size='sm' variant='bordered' defaultSelectedKeys={['USD']}>
          <SelectItem key='USD' value='USD'>USD</SelectItem>
          <SelectItem key='MXN' value='MXN'>MXN</SelectItem>
        </Select>
      </div>
    </div>
  )
}

function ContenidoPaquete () {
  // const [productModal, setProductModal] = useState(false)
  return (
    <div className={Styles.containerPaqueteContenido}>
      <Table removeWrapper>
        <TableHeader>
          <TableColumn>Descripcion</TableColumn>
          <TableColumn>ID USA</TableColumn>
          <TableColumn>ID MX</TableColumn>
          <TableColumn width={100}>Opciones</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>Chamarra</TableCell>
            <TableCell>012</TableCell>
            <TableCell>022</TableCell>
            <TableCell>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly variant='light'>
                    <BsThreeDots />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant='faded'>
                  <DropdownItem key='deleted' startContent={<MdOutlineDeleteOutline />}>
                    Eliminar
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export function FormCustomShip ({ type }) {
  const [isSobre, setSobre] = useState(false)
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <section className={Styles.containerHeader}>
        <Cantidad />
        <SelectedCustom isSobre={isSobre} setSobre={setSobre} />
        {
          isSobre
            ? ''
            : <Medidas />
        }
        <Peso />
      </section>
      <Divider />
      <section className={Styles.containerRow2}>
        <ValorDeclarado />
        <div style={{ width: '100%' }}>
          <label>Contenido</label>
          <Input size='sm' variant='bordered' labelPlacement='outside' placeholder='Buscar contenido' />
        </div>
      </section>
      <Divider />
      <section>
        <ContenidoPaquete />
      </section>
    </div>
  )
}
