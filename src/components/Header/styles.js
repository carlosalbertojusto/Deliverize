import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 8rem;
  padding: 1.6rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.15);
  margin-bottom: 2.4rem;
`

export const Wrapper = styled.div`
  width: 85rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`

export const IconLogoWrapper = styled.div`
  width: 22.5rem;
  height: 4.8rem;

  display: flex;
  align-items: center;
`

export const Search = styled.div`
  width: 35rem;
  height: 4.8rem;
`

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.COLORS.RED_300};
  }

  svg {
    font-size: 2.4rem;
    fill: ${({ theme }) => theme.COLORS.RED_300};
  }
`

export const ShoppingCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  .wrapperShoppingCart {
    position: relative;
    display: flex;
    justify-content: center;

    span {
      position: absolute;
      top: -40%;
      left: 60%;
      width: 1.6rem;
      height: 1.6rem;

      background: ${({ theme }) => theme.COLORS.ORANGE_300};
      border-radius: 50rem;

      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      font-size: 2.4rem;
      fill: ${({ theme }) => theme.COLORS.RED_300};
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.COLORS.RED_300};
  }
`
