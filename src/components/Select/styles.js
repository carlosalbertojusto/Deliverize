import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  box-shadow: 0rem 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: ${({ theme }) => theme.COLORS.RED_100};
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`

export const AdressSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h1 {
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  span {
    width: 6rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.RED_100};
  }
`
