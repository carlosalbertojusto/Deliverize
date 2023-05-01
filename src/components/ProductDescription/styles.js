import styled from 'styled-components'

export const Container = styled.div`
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

  @media (max-width: 1180px) {
    display: flex;
    width: 34.3rem;
    height: 31rem;

    h1 {
      font-weight: 500;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
    p {
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 38.8rem;

  @media (max-width: 1180px) {
    img {
      object-fit: contain;
      width: 34rem;
      height: 13.1rem;
    }
  }
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
  @media (max-width: 1180px) {
    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.ORANGE_500};
    }

    span {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      text-decoration: line-through;
    }
  }
`
