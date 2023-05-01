import { Container, ImageWrapper, Price } from './styles'

export function ProductDescription({ data, image }) {
  return (
    <Container>
      <ImageWrapper>
        <img src={image} alt="Foto do produto" />
      </ImageWrapper>
      <h1>{data.nm_product}</h1>
      <p>{data.description}</p>
      <Price>
        <p>R${data.vl_discount}</p>
        <span>R${data.vl_price}</span>
      </Price>
    </Container>
  )
}
