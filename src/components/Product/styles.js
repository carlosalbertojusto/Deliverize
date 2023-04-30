import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 140vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 6.6rem;
`

export const ProductDescription = styled.div`
  width: 59.7rem;
  height: 100vh;
  padding: 2.4rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h1 {
    font-weight: 500;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 38.8rem;
`

export const Price = styled.div`
  width: 25rem;
  height: 3.8rem;

  display: flex;
  align-items: center;
  gap: 1.7rem;

  p {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 3.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
  }

  span {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 3.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    text-decoration: line-through;
  }
`

export const AdditionalItems = styled.div`
  width: 43.9rem;
  height: 66.2rem;
  padding: 3.2rem;
  overflow-y: overlay;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.1rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0.8rem;
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

export const Item = styled.div`
  width: 36rem;
  height: 9.6rem;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.YELLOW_300};
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
export const NeedCutlery = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

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
