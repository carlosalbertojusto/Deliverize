import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ isAdicionalIngredient }) =>
    isAdicionalIngredient ? '8.9rem' : '100%'};

  padding: 1.2rem;

  height: ${({ isAdicionalIngredient }) =>
    isAdicionalIngredient ? '3.2rem' : '4.8rem'};
  display: flex;
  align-items: center;

  gap: ${({ isAdicionalIngredient }) =>
    isAdicionalIngredient ? '.4rem' : '3.3rem'};

  border: ${({ isAdicionalIngredient, theme }) =>
    isAdicionalIngredient
      ? `0.1rem solid ${theme.COLORS.ORANGE_300}`
      : `0.1rem solid ${theme.COLORS.RED_300}`};

  border-radius: ${({ isAdicionalIngredient }) =>
    isAdicionalIngredient ? '.4rem' : '.5rem'};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  svg {
    font-size: 2.4rem;
    stroke: ${({ theme, isAdicionalIngredient }) =>
      isAdicionalIngredient ? theme.COLORS.RED_100 : ''};
  }

  input {
    width: ${({ isAdicionalIngredient }) =>
      isAdicionalIngredient ? '2.5rem' : '27rem'};
    height: ${({ isAdicionalIngredient }) =>
      isAdicionalIngredient ? '1.6rem' : ''};
    border: none;
    text-align: ${({ isAdicionalIngredient }) =>
      isAdicionalIngredient ? 'center' : 'left'};
    font-size: ${({ isAdicionalIngredient }) =>
      isAdicionalIngredient ? '1.4rem' : '1.6rem'};

    border-radius: ${({ isAdicionalIngredient }) =>
      isAdicionalIngredient ? '.4rem' : '.5rem'};
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`
