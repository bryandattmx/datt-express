import { Card, CardBody, CardHeader, Divider, Input, Modal, ModalBody, ModalContent, ModalHeader, Image, RadioGroup, Radio, Button, Chip, ModalFooter } from '@nextui-org/react'
import Styles from './styles/ModalCheckout.module.css'
import { IoCardSharp } from 'react-icons/io5'
import { FaMoneyBill } from 'react-icons/fa'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { GiReceiveMoney } from 'react-icons/gi'
import { useState } from 'react'

function CardMehtodPayable ({ type, setMethod, url }) {
  return (
    <Card isPressable onPress={() => setMethod(type)}>
      <CardBody>
        <section style={{ width: '100%', display: 'flex', gap: '1rem' }}>
          <Radio value={type} />
          <div>
            <p style={{ fontSize: '1rem', fontWeight: '500' }}>
              {
                type === 'tarjeta'
                  ? 'Tarjeta debito / credito'
                  : type === 'efectivo'
                    ? 'Efectivo'
                    : type === 'cheque'
                      ? 'Cheque'
                      : 'Hibrido'
              }
            </p>
            <span style={{ fontSize: '0.875rem', color: 'var(--textColor)' }}>Esta opcion te permitira pagar ya sea con tajeta de credito o debito</span>
          </div>
          {
            type === 'tarjeta'
              ? <IoCardSharp style={{ fontSize: '2rem', color: 'var(--textColor)' }} />
              : type === 'efectivo'
                ? <FaMoneyBill style={{ fontSize: '2rem', color: 'var(--textColor)' }} />
                : type === 'cheque'
                  ? <GiReceiveMoney style={{ fontSize: '2rem', color: 'var(--textColor)' }} />
                  : <BiMoneyWithdraw style={{ fontSize: '2rem', color: 'var(--textColor)' }} />
          }
        </section>
      </CardBody>
    </Card>
  )
}

function HybridMethod () {
  return (
    <>
      <Input type='number' variant='bordered' labelPlacement='outside' label='Tarjeta' placeholder='Ingresa el monto.' />
      <Input type='number' variant='bordered' labelPlacement='outside' label='Efectivo' placeholder='Ingresa el monto.' />
      <Input type='number' variant='bordered' labelPlacement='outside' label='Cheque' placeholder='Ingresa el monto.' />
    </>
  )
}

const imageURL = 'https://images.pexels.com/photos/20121597/pexels-photo-20121597/free-photo-of-casas-edificio-casa-vehiculo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const cardURL = 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const moneyURL = 'https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const chequeURL = 'https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const hybridURL = 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

export function ModalCheckout ({ isActive, setActive }) {
  const [method, setMethod] = useState(false)
  return (
    <Modal isOpen={isActive} onOpenChange={setActive} style={{ maxWidth: '1000px', maxHeight: '1200px' }}>
      <ModalContent>
        <ModalHeader>Ir a pagar</ModalHeader>
        <ModalBody>
          <main className={Styles.container}>
            <aside className={Styles.containerReview}>
              <section>
                <p>Tipo de pagos</p>
                <RadioGroup value={method} onValueChange={setMethod} color='success'>
                  <CardMehtodPayable url={cardURL} type='tarjeta' setMethod={setMethod} />
                  <CardMehtodPayable url={moneyURL} type='efectivo' setMethod={setMethod} />
                  <CardMehtodPayable url={chequeURL} type='cheque' setMethod={setMethod} />
                  <CardMehtodPayable url={hybridURL} type='hibrido' setMethod={setMethod} />
                </RadioGroup>
              </section>
              <section style={{ display: 'flex', gap: '1rem' }}>
                {
                  method === 'hibrido'
                    ? <HybridMethod />
                    : <Input variant='bordered' placeholder='Dinero que ingresa.' />
                }
              </section>
            </aside>
            <aside className={Styles.containerReview}>
              <Card>
                <CardHeader>
                  <Card className='w-max' style={{ width: '100%' }}>
                    <CardBody className='w-max'>
                      <section style={{ width: '100%', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Image src={imageURL} width={150} isBlurred isZoomed className='object-cover' />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <Chip color='success' variant='flat'>Servicio a cotizar</Chip>
                          <div>
                            <p style={{ fontSize: '1,25rem', fontWeight: '500' }}>Paquete 12 X 12 X 12</p>
                            <span style={{ color: 'var(--textColor)' }}>Embalaje Datt</span>
                          </div>
                        </div>
                      </section>
                    </CardBody>
                  </Card>
                </CardHeader>
                <CardBody>
                  <main style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <section style={{ width: '100%', display: 'flex', gap: '1rem' }}>
                      <Input variant='bordered' placeholder='Agrega tu cupon.' />
                      <Button color='success' variant='solid'>Aplicar</Button>
                    </section>
                    <section style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div className={Styles.containerPrices}>
                        <p className={Styles.labelItems}>Servicio de envio</p>
                        <span className={Styles.priceItem}>$1000</span>
                      </div>
                      <div className={Styles.containerPrices}>
                        <p className={Styles.labelItems}>Productos de embalaje</p>
                        <span className={Styles.priceItem}>$250</span>
                      </div>
                      <Divider />
                      <div className={Styles.containerPrices}>
                        <p className={Styles.labelItems}>Cupon "DATT24"</p>
                        <span className={Styles.priceItem} style={{ color: 'red' }}>- $250</span>
                      </div>
                      <Divider />
                      <section className={Styles.containerPrices}>
                        <p className={Styles.labelFinal}>Total</p>
                        <span className={Styles.finalPriceItem}>$1,000 USD</span>
                      </section>
                    </section>
                  </main>
                </CardBody>
              </Card>
            </aside>
          </main>
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onPress={() => setActive(!isActive)}>Cancelar</Button>
          <Button color='success' onPress={() => setActive(!isActive)}>Pagar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
