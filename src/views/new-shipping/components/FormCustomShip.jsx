import { SelectItem, Input, Select, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, Divider } from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa6'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import Styles from '../../../components/styles/ShoppingSectionWeight.module.css'

function SelectedCustom () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Tipo de paquete</label>
      <Select placeholder='Ejemplo: Caja - Sobre' size='sm' variant='bordered'>
        <SelectItem>Sobre</SelectItem>
        <SelectItem>Caja</SelectItem>
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
      {/* <div className={Styles.containerInfoCalc}>
        <p className={Styles.textGrid}>Peso masa <span className={Styles.textGridValue}>5 Kg</span></p>
        <p className={Styles.textGrid}>Peso volumetrico<span className={Styles.textGridValue}>1 Kg</span></p>
        <p className={Styles.textGrid}>Peso a cotizar<span className={Styles.textGridValue}>5 Kg</span></p>
      </div> */}
    </section>
  )
}

function Peso () {
  return (
    <div id='Peso'>
      <label>Peso</label>
      <div className={Styles.containersWithOptions}>
        <Input placeholder='0 Kg' size='sm' type='number' variant='bordered' />
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
      <Input placeholder='$0' size='sm' variant='bordered' />
    </div>
  )
}

function ContenidoPaquete () {
  // const [productModal, setProductModal] = useState(false)
  return (
    <div className={Styles.containerPaqueteContenido}>
      <div style={{ width: '25%' }}>
        <Button color='default' variant='flat' size='sm'><FaPlus />Agregar producto</Button>
      </div>
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
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <section className={Styles.containerHeader}>
        <Cantidad />
        <div style={{ width: '1px', height: '90%', border: '1px solid #F4F4F4' }} />
        <Medidas />
      </section>
      <Divider />
      <section className={Styles.containerRow2}>
        <SelectedCustom />
        <Peso />
        <ValorDeclarado />
      </section>
      <Divider />
      <section>
        <ContenidoPaquete />
      </section>
    </div>
  )
}
