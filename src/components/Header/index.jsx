import {
  Container,
  IconLogoWrapper,
  Search,
  Login,
  ShoppingCart,
  Wrapper,
} from './styles'

import { Input, Select } from '../index'
import { images } from '../../assets/index'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineShoppingCart, MdKeyboardArrowDown } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'

export function Header() {
  return (
    <Container>
      <IconLogoWrapper>
        <img src={images.IconLogo} alt="Ícone do aplicativo Deliverize " />
        <img
          src={images.TextLogo}
          alt="Texto com o nome do aplicativo Deliverize"
        />
      </IconLogoWrapper>
      <Wrapper>
        <Select
          adressName="R. Antonio Braune, 222"
          icon={MdKeyboardArrowDown}
        />

        <Search>
          <Input
            type="text"
            placeholder="Busque por estabelecimento ou produtos"
            rightIcon={FiSearch}
          />
        </Search>
        <Login>
          <BiUserCircle />
          <span>Entrar</span>
        </Login>
        <ShoppingCart>
          <div className="wrapperShoppingCart">
            <MdOutlineShoppingCart />
            <span>1</span>
          </div>
          <p>Carrinho</p>
        </ShoppingCart>
      </Wrapper>
    </Container>
  )
}
