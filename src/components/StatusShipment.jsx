import { Chip } from '@nextui-org/react'

export function StatusItem ({ value }) {
  const colorToShow = value === 'Entregado' ? 'success' : value === 'Tránsito' ? 'primary' : 'warning'
  return (
    <Chip color={colorToShow} variant='flat'>{value}</Chip>
  )
}
