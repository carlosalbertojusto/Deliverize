import { Checkbox, ProductDescription, Button } from '../index'

import { useState } from 'react'

import {
  Container,
  AdditionalItems,
  AddIngredients,
  NeedCutlery,
  Submit,
  Wrapper,
  InputAdditional,
  WrapperIngredients,
  TextItem,
  InputBurguer,
} from './styles'

import { Modal } from '../index'

import { images } from '../../assets/index'
import { FiMinus, FiPlus } from 'react-icons/fi'

export function Product({ data, ...rest }) {
  const [inputValueItem1, setInputValueItem1] = useState(0)
  const [inputValueItem2, setInputValueItem2] = useState(0)
  const [inputValueItem3, setInputValueItem3] = useState(0)
  const [inputValueItem4, setInputValueItem4] = useState(0)
  const [inputValueBurguer, setInputValueBurguer] = useState(0)

  const [ingredients, setIngredients] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const maxItem = 8

  const changeColor = inputValueItem1 === 0 ? '#AEB6C1' : '#D80000'
  const changeColor2 = inputValueItem2 === 0 ? '#AEB6C1' : '#D80000'
  const changeColor3 = inputValueItem3 === 0 ? '#AEB6C1' : '#D80000'
  const changeColor4 = inputValueItem4 === 0 ? '#AEB6C1' : '#D80000'
  const changeColorBurguer = inputValueBurguer === 0 ? '#AEB6C1' : '#D80000'

  function handleOpenModal() {
    setModalOpen(true)
  }

  function handleCloseModal() {
    setModalOpen(false)
  }

  function handleIncrement(setInput) {
    setInput((prevValue) => prevValue + 1)
  }

  function handleDecrement(setInput) {
    setInput((prevValue) => prevValue - 1)
  }

  function handleSaveIngredients() {
    if (inputValueBurguer === 0) {
      alert('Adicione um hambuguer para conseguir colocar adicionais')
      return
    }

    if (
      inputValueItem1 > maxItem ||
      inputValueItem2 > maxItem ||
      inputValueItem3 > maxItem ||
      inputValueItem4 > maxItem
    ) {
      alert('Número máximo de itens é 8')
      return
    }
    setIngredients([
      {
        name: 'Queijo Cheddar',
        quantity: inputValueItem1,
      },
      {
        name: 'Cebola Crispy',
        quantity: inputValueItem2,
      },
      {
        name: 'Molho Cheddar',
        quantity: inputValueItem3,
      },
      {
        name: 'Molho de Picanha',
        quantity: inputValueItem4,
      },
    ])

    handleOpenModal()
  }

  return (
    <Container {...rest}>
      <ProductDescription
        image={images.Hamburguer}
        data={{
          nm_product: data.nm_product,
          description: data.description,
          vl_price: data.vl_price,
          vl_discount: data.vl_discount,
        }}
      />

      <AdditionalItems>
        <Wrapper>
          <AddIngredients>
            <h1>Adicionar ingredientes</h1>
            <span>Até 8 ingredientes.</span>
          </AddIngredients>
          <WrapperIngredients>
            <TextItem>
              <p>Queijo Cheddar</p>
              <span>+ R$4.99</span>
            </TextItem>
            <InputAdditional color={changeColor}>
              <FiMinus
                id="minus"
                size={24}
                onClick={() => handleDecrement(setInputValueItem1)}
              />

              <input id="item1" type="text" value={inputValueItem1} readOnly />

              <FiPlus
                id="plus"
                size={24}
                onClick={() => handleIncrement(setInputValueItem1)}
              />
            </InputAdditional>
          </WrapperIngredients>

          <WrapperIngredients>
            <TextItem>
              <p>Cebola Crispy</p>
              <span>+ R$1.50</span>
            </TextItem>
            <InputAdditional color={changeColor2}>
              <FiMinus
                id="minus"
                size={24}
                onClick={() => handleDecrement(setInputValueItem2)}
              />

              <input id="item2" type="text" value={inputValueItem2} readOnly />

              <FiPlus
                id="plus"
                size={24}
                onClick={() => handleIncrement(setInputValueItem2)}
              />
            </InputAdditional>
          </WrapperIngredients>

          <WrapperIngredients>
            <TextItem>
              <p>Molho Cheddar</p>
              <span>+ R$3.50</span>
            </TextItem>
            <InputAdditional color={changeColor3}>
              <FiMinus
                id="minus"
                size={24}
                onClick={() => handleDecrement(setInputValueItem3)}
              />

              <input id="item3" type="text" value={inputValueItem3} readOnly />

              <FiPlus
                id="plus"
                size={24}
                onClick={() => handleIncrement(setInputValueItem3)}
              />
            </InputAdditional>
          </WrapperIngredients>

          <WrapperIngredients>
            <TextItem>
              <p>Molho de Picanha</p>
              <span>+ R$3.50</span>
            </TextItem>
            <InputAdditional color={changeColor4}>
              <FiMinus
                id="minus"
                size={24}
                onClick={() => handleDecrement(setInputValueItem4)}
              />

              <input id="item4" type="text" value={inputValueItem4} readOnly />

              <FiPlus
                id="plus"
                size={24}
                onClick={() => handleIncrement(setInputValueItem4)}
              />
            </InputAdditional>
          </WrapperIngredients>

          <NeedCutlery>
            <div className="text">
              <h1>Precisa de talher?</h1>
            </div>
            <Checkbox name="Sim" />
            <Checkbox name="Não" />
          </NeedCutlery>
        </Wrapper>

        <Submit>
          <InputBurguer color={changeColorBurguer}>
            <FiMinus
              id="minus"
              size={24}
              onClick={() => handleDecrement(setInputValueBurguer)}
            />
            <input type="text" value={inputValueBurguer} readOnly />
            <FiPlus
              id="plus"
              size={24}
              onClick={() => handleIncrement(setInputValueBurguer)}
            />
          </InputBurguer>
          <Button name="Adicionar" onClick={handleSaveIngredients} />
        </Submit>
      </AdditionalItems>

      <Modal
        ingredients={ingredients}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        timeToClose={10000}
      />
    </Container>
  )
}
