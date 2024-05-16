import { useEffect, useState } from 'react'
import { Button, Card, Modal, ModalContent, ModalFooter, ModalHeader, Image, CardFooter, CardHeader, Checkbox, Badge, Chip } from '@nextui-org/react'
import SemiSmallBox from '../assets/semiSmallBox.webp'
import SemimediumBox from '../assets/semiMediumBox.webp'
import MediumBox from '../assets/mediumBox.webp'
import BigBox from '../assets/bigBox.webp'
import smallBox from '../assets/smallBox.webp'
import sobre from '../assets/sobre.webp'
import { RiSkipRightLine } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa6'
import { IoMdCheckmark } from 'react-icons/io'
import Styles from './styles/ModalEmbalaje.module.css'

const boxes = [
  {
    title: 'Caja semi pequeña',
    image: SemiSmallBox,
    price: 54,
    quantity: 12
  },
  {
    title: 'Caja semi mediana',
    image: SemimediumBox,
    price: 73,
    quantity: 56
  },
  {
    title: 'Caja semi mediana',
    image: MediumBox,
    price: 84,
    quantity: 12
  },
  {
    title: 'Caja grande',
    image: BigBox,
    price: 96,
    quantity: 98
  },
  {
    title: 'Caja chica',
    image: smallBox,
    price: 42,
    quantity: 12
  },
  {
    title: 'Sobre',
    image: sobre,
    price: 23,
    quantity: 56
  }
]

function ProductEmbalaje () {
  const [boxSelected, setBoxSelected] = useState(0)
  const [isSelected, setSelected] = useState(false)

  useEffect(() => {
    setBoxSelected(boxes[Math.floor(Math.random() * 6)])
  }, [])
  return (
    <Badge content={boxSelected.quantity} color='primary'>
      <Card isFooterBlurred radius='lg' className='border-none' isPressable onPress={() => setSelected(!isSelected)}>
        <CardHeader className='absolute space z-10'>
          <Checkbox color='primary' className='z-10' isSelected={isSelected} isReadOnly />
          <Chip size='sm' color='primary'>{boxSelected.title}</Chip>
        </CardHeader>
        <Image
          alt='Woman listing to music'
          className='object-cover z-0'
          height={200}
          src={boxSelected.image}
          width={200}
        />
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-small text-black/80 font-[500]'>${boxSelected.price}MXN</p>
          <Button isIconOnly={isSelected} color={isSelected ? 'primary' : 'default'} radius='lg' size='sm' onPress={() => setSelected(!isSelected)}>
            {
              isSelected
                ? <IoMdCheckmark style={{ fontSize: '16px' }} />
                : 'Agregar'
            }
          </Button>
        </CardFooter>
      </Card>

    </Badge>
  )
}

export function ModalEmbalaje ({ isActive, setActive }) {
  return (
    <Modal isOpen={isActive === 'product'} onOpenChange={() => setActive(false)} style={{ maxWidth: '1000px', maxHeight: '1200px' }}>
      <ModalContent>
        <ModalHeader>Desea agregar complementos al servicio?</ModalHeader>
        <main style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1rem' }}>
          <header style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--textColor)' }}>Productos recomendados</p>
            <div className={Styles.containerProducts}>
              <ProductEmbalaje />
              <ProductEmbalaje />
              <ProductEmbalaje />
              <ProductEmbalaje />
            </div> {/* Productos recomendados */}
          </header>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--textColor)' }}>Mas productos</p>
            <div className={Styles.containerProducts}>
              <ProductEmbalaje />
              <ProductEmbalaje />
              <ProductEmbalaje />
              <ProductEmbalaje />
              <ProductEmbalaje />
              <ProductEmbalaje />
              <ProductEmbalaje />
              <ProductEmbalaje />
            </div> {/* Todos los Productos */}
          </div>
        </main>
        <ModalFooter>
          <Button onPress={() => setActive(false)} color='default' variant='flat' endContent={<RiSkipRightLine style={{ fontSize: '1.125rem' }} />}>Omitir</Button>
          <Button onPress={() => setActive(false)} color='success' endContent={<FaPlus style={{ fontSize: '1rem' }} />}>Agregar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
