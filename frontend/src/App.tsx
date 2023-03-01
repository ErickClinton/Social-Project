import { GlobalStyleDark,GlobalStyleLight } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, lightTheme } from './styles/themes/default'
import { Router } from './Router'
import {BrowserRouter} from 'react-router-dom'
import {useState} from 'react'


function teste(){
  console.log("TESTE")
}

export function App(){
  const ChooseTheme = true
  /*
  const [theme,setTheme] = useState("Light")

    const themeToggler =() =>{
        theme === "Light" ? setTheme('Dark'): setTheme("Light")
    }*/ 
  return(
    <ThemeProvider theme={defaultTheme }>
      <BrowserRouter >
      <Router/>
      
      {ChooseTheme ?(
        <GlobalStyleDark  />
      ):(<GlobalStyleLight  />)}
      
      </BrowserRouter >
      </ThemeProvider>
    
  )
}