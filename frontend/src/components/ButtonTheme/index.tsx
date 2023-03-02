import {Theme,BallDark,BallLight,ButtonContainer} from './styles'
import { Moon,Sun} from "phosphor-react";
import {useState} from 'react'
import { GlobalStyleDark, GlobalStyleLight } from '../../styles/global';
export function ButtonTheme(){
    const[theme,setTheme] = useState<boolean>(true)


  function chooseTheme(){
      theme?(
          setTheme(false)
      ):(setTheme(true))
      
  }
    return(
        <Theme>
                
                <ButtonContainer aria-hidden="true" onClick={chooseTheme}>
                    <Moon size={32} />
                    <Sun size={28} />
                    
                    {theme?
                        (
                            <>
                                <GlobalStyleDark/>
                                <BallDark/>
                        </>):
                        (
                        <>
                            <GlobalStyleLight/>
                            <BallLight/>
                        </>)
                    }
                </ButtonContainer>
                
                
            </Theme> 
    )
}