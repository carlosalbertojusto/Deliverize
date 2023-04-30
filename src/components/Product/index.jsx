import { Input, Checkbox } from '../index'

import {
  Container,
  AdditionalItems,
  ProductDescription,
  Price,
  ImageWrapper,
  Item,
  TextItem,
  AddIngredients,
  NeedCutlery,
} from './styles'

import { images } from '../../assets/index'

import { FiPlus, FiMinus } from 'react-icons/fi'

export function Product({ data, ...rest }) {
  return (
    <Container {...rest}>
      <ProductDescription>
        <ImageWrapper>
          <img src={images.Hamburguer} alt="Foto do produto" />
        </ImageWrapper>
        <h1>{data.nm_product}</h1>
        <p>{data.description}</p>
        <Price>
          <p>R${data.vl_price}</p>
          <span>R${data.vl_discount}</span>
        </Price>
      </ProductDescription>
      <AdditionalItems>
        <AddIngredients>
          <h1>Adicionar ingredientes</h1>
          <span>Até 8 ingredientes.</span>
        </AddIngredients>

        <Item>
          <TextItem>
            <p>Queijo cheddar</p>
            <span>+ R$4,99</span>
          </TextItem>

          <Input
            isAdicionalIngredient
            type="text"
            leftIcon={FiMinus}
            rightIcon={FiPlus}
          />
        </Item>

        <NeedCutlery>
          <div className="text">
            <h1>Precisa de talher?</h1>
          </div>
          <Checkbox name="Sim" />
          <Checkbox name="Não" />
        </NeedCutlery>
      </AdditionalItems>
    </Container>
  )
}
