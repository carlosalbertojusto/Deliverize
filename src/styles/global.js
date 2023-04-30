import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size:62.5%;
}

body{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  -webkit-font-smoothing: antialised;
}

body, button, input{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  outline: none;
}


button {
  cursor: pointer;
  transition: filter 0.2s
}

button:hover{
  filter: brightness(0.9)
}
`
