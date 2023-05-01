import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.ORANGE_300};
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.COLORS.ORANGE_300};

  span {
    font-weight: 500;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
`
