import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 1.2rem;

  height: 4.8rem;
  display: flex;
  align-items: center;

  gap: 3.3rem;

  border: ${({ theme }) => `0.1rem solid ${theme.COLORS.RED_300}`};

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  svg {
    font-size: 2.4rem;
    cursor: pointer;
  }

  input {
    width: 27rem;
    border: none;
    font-size: 1.6rem;

    border-radius: 0.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`
