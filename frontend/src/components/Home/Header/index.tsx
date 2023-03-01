import { useState } from 'react';
import styles from './Header.module.css'
import { ButtonContainer, HomeContainer,Logo,ContainerHeader,Light,Dark,Ball,Theme} from './Header.styles'
import { Moon,Sun} from "phosphor-react";

export function Header(){

    const[theme,setTheme] = useState(true)


    function chooseTheme(){
        theme?(
            setTheme(false)
        ):(setTheme(true))
        console.log(theme)
    }
    return(
        <HomeContainer>
            <ContainerHeader>
                <Logo>Olá, Bem vindos!</Logo>
                <Logo>Entre para o nosso time!</Logo>

            </ContainerHeader>
            
            <Theme>
                <input type="checkbox"/>
                <label aria-hidden="true">
                    <Light aria-hidden="true"></Light>
                    <Dark aria-hidden="true"></Dark>
                    <Sun size={32} />
                    <Moon size={32} />
                    <Ball></Ball>
                </label>
               
                
            </Theme>                
                <button onClick={chooseTheme} >teste</button>
        </HomeContainer>
        
    )
}