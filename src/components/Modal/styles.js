import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 8rem;
  right: 1rem;
  height: 15.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  filter: drop-shadow(drop-shadow(0rem -0.1rem 0.4rem rgba(0, 0, 0, 0.25)));
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  h1 {
    padding: 0.9rem 1.1rem 0.5rem 0.9rem;
    position: relative;
    font-family: 'Roboto Condensend';
    font-weight: 700;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND};

    background-color: ${({ theme }) => theme.COLORS.ORANGE_300};
    border-radius: 0.4rem 0.4rem 0 0;
  }
`

export const Icon = styled.div`
  position: absolute;
  z-index: 1;
  top: -1rem;
  left: 12rem;
  svg {
    font-size: 1.6rem;
    fill: ${({ theme }) => theme.COLORS.ORANGE_300};
  }
`

export const ProductInformations = styled.div`
  width: 100%;
  height: 12.4rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  border-radius: 0 0 0.4rem 0.4rem;
  padding: 0.8rem 1.1rem;
  p {
    font-family: 'Roboto Condensed';
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.RED_100};
  }

  span,
  ul > li {
    font-family: 'Roboto Condensed';
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  span,
  ul {
    margin: 0 1.4rem;
  }
`
