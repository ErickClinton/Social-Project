import { Header } from './Header'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>

      
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  )
}