import { Container, AdressSelect } from './styles'

export function Select({ adressName, icon: Icon }) {
  return (
    <Container>
      <AdressSelect>
        <span>Entrega:</span>
        <h1>{adressName}</h1>
      </AdressSelect>
      {Icon && <Icon size={24} />}
    </Container>
  )
}
