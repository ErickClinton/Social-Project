import { GlobalStyleDark,GlobalStyleLight } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, lightTheme } from './styles/themes/default'
import { Router } from './Router'
import {BrowserRouter} from 'react-router-dom'
import {useState} from 'react'




export function App(){
  
  const[theme,setTheme] = useState(true)


  function chooseTheme(){
      theme?(
          setTheme(false)
      ):(setTheme(true))
      
  }
  return(
    <ThemeProvider theme={defaultTheme }>
      <BrowserRouter >
      <Router chooseTheme={chooseTheme} theme={theme}/>
      
      {theme ?(
        <GlobalStyleDark  />
      ):(<GlobalStyleLight  />)}
      
      </BrowserRouter >
      </ThemeProvider>
    
  )
}