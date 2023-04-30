import { Container } from './styles'

export function Checkbox({ name, onClick }) {
  return (
    <Container>
      <span>{name}</span>
      <button type="button" onClick={onClick} />
    </Container>
  )
}
