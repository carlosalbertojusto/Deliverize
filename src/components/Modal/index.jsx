import { useState, useEffect } from 'react'
import { Container, ProductInformations, Icon } from './styles'
import { BsFillTriangleFill } from 'react-icons/bs'

export function Modal({ ingredients, isOpen, onClose, timeToClose }) {
  const [openModal, setOpenModal] = useState(isOpen)

  useEffect(() => {
    setOpenModal(isOpen)
  }, [isOpen])

  useEffect(() => {
    let timerId
    if (openModal && timeToClose) {
      timerId = setTimeout(() => {
        setOpenModal(false)
        onClose()
      }, timeToClose)
    }
    return () => {
      clearTimeout(timerId)
    }
  }, [openModal, timeToClose, onClose])

  // function closeModal(){
  //   setOpenModal(false)
  //   onClose()
  // }

  return isOpen ? (
    <Container>
      <Icon>
        <BsFillTriangleFill />
      </Icon>
      <h1>Adicionado com Sucesso</h1>

      <ProductInformations>
        <p>Oferta Cheddar Bacon</p>

        <span>Ingredientes:</span>
        {ingredients.map((ingredient) => (
          <ul key={ingredient.name}>
            <li>
              <span>
                {ingredient.quantity}: {ingredient.name}
              </span>
            </li>
          </ul>
        ))}
      </ProductInformations>
    </Container>
  ) : null
}
