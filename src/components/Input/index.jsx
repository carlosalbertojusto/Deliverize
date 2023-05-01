import { Container } from './styles'

export function Input({
  rightIcon: RightIcon,
  isAdicionalIngredient = false,
  onClick,
  ...rest
}) {
  return (
    <Container isAdicionalIngredient={isAdicionalIngredient}>
      <input {...rest} />
      {RightIcon && <RightIcon size={24} onClick={onClick} />}
    </Container>
  )
}
