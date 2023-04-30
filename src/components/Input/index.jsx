import { Container } from './styles'

export function Input({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isAdicionalIngredient = false,
  ...rest
}) {
  return (
    <Container isAdicionalIngredient={isAdicionalIngredient}>
      {LeftIcon && <LeftIcon size={24} />}
      <input {...rest} />
      {RightIcon && <RightIcon size={24} />}
    </Container>
  )
}
