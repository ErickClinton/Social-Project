import { GlobalStyleDark,GlobalStyleLight } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, lightTheme } from './styles/themes/default'
import { Router } from './Router'
import {BrowserRouter} from 'react-router-dom'
import {useState} from 'react'




export function App(){
  
  
  return(
    <ThemeProvider theme={defaultTheme }>
      <BrowserRouter >
      <Router />
      
      
      
      </BrowserRouter >
      </ThemeProvider>
    
  )
}