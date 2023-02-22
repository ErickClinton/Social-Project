import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, lightTheme } from './styles/themes/default'
import { Router } from './Router'
import {BrowserRouter} from 'react-router-dom'
import {useState} from 'react'


export function App(){
  /*
  const [theme,setTheme] = useState("Light")

    const themeToggler =() =>{
        theme === "Light" ? setTheme('Dark'): setTheme("Light")
    }*/ 
  return(
    <ThemeProvider theme={defaultTheme }>
      <BrowserRouter >
      <Router/>
      
      
      <GlobalStyle  />
      </BrowserRouter >
      </ThemeProvider>
    
  )
}