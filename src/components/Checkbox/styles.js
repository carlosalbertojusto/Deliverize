import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  button {
    width: 1.6rem;
    height: 1.6rem;
    border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_200};
    background: transparent;
    border-radius: 50rem;

    &:focus {
      background-color: ${({ theme }) => theme.COLORS.YELLOW_200};
    }
    
  }
`
