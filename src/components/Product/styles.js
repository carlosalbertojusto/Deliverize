import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 6.6rem;

  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const AdditionalItems = styled.div`
  width: 43.9rem;
  height: 66.2rem;
  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.1rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0.8rem;

  @media (max-width: 1180px) {
    border: none;
    height: 100vh;
  }
`

export const AddIngredients = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_100};
  padding: 0.8rem 1.6rem;
  h1 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  span {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.COLORS.YELLOW_500};
  }
`

export const NeedCutlery = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .text {
    background-color: ${({ theme }) => theme.COLORS.YELLOW_100};
    padding: 0.8rem 1.463rem 2.4rem;
  }

  h1 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`

export const Submit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 1.6rem;
`

export const Wrapper = styled.div`
  width: 39rem;
  height: 53.7rem;
  padding: 0 1.2rem 0;
  overflow-y: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.1rem;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    border-radius: 1rem;
  }

  @media (max-width: 1180px) {
    height: 100vh;
  }
`

export const IngredientsList = styled.div`
  width: 100%;
`

export const TextItem = styled.div`
  width: 29.3rem;
  height: 7.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  p {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  span {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.COLORS.YELLOW_500};
  }
`

export const WrapperIngredients = styled.div`
  width: 35.9rem;
  height: 9.6rem;

  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.YELLOW_300};

  input {
    width: 2.5rem;
    height: 1.6rem;
    border: none;
    text-align: center;
    font-size: 1.4rem;

    border-radius: 0.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
  @media (max-width: 1180px) {
    display: flex;
    height: 100vh;
  }
`

export const InputAdditional = styled.div`
  width: 8.9rem;
  height: 3.2rem;
  padding: 1.2rem;

  display: flex;
  align-items: center;

  gap: 0.4rem;

  border: ${({ theme }) => `0.1rem solid ${theme.COLORS.ORANGE_300}`};

  border-radius: 0.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  #plus,
  #minus {
    font-size: 2.4rem;
    cursor: pointer;
  }

  #plus {
    stroke: ${({ theme }) => theme.COLORS.RED_100};
  }

  #minus {
    stroke: ${(props) => props.color};
  }

  input {
    width: 2.5rem;
    height: 1.6rem;
    border: none;
    text-align: center;
    font-size: 1.4rem;

    border-radius: 0.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`

export const InputBurguer = styled.div`
  width: 14rem;
  height: 4rem;
  padding: 1.2rem;

  display: flex;
  align-items: center;

  gap: 0.4rem;

  border: ${({ theme }) => `0.1rem solid ${theme.COLORS.ORANGE_300}`};

  border-radius: 0.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  #plus,
  #minus {
    font-size: 2.4rem;
    cursor: pointer;
  }

  #plus {
    stroke: ${({ theme }) => theme.COLORS.RED_100};
  }

  #minus {
    stroke: ${(props) => props.color};
  }

  input {
    width: 2.5rem;
    height: 1.6rem;
    border: none;
    text-align: center;
    font-size: 1.4rem;

    border-radius: 0.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`
