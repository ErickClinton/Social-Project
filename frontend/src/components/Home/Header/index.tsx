import styles from './Header.module.css'
import { ButtonContainer, HomeContainer,Logo,ContainerHeader,Light,Dark,Ball,Theme} from './Header.styles'
import { Moon,Sun} from "phosphor-react";

export function Header(){
    return(
        <HomeContainer>
            <ContainerHeader>
                <Logo>Olá, Bem vindos!</Logo>
                <Logo>Entre para o nosso time!</Logo>

            </ContainerHeader>
            
            <Theme>
                <label aria-hidden="true">
                    <Light aria-hidden="true"></Light>
                    <Dark aria-hidden="true"></Dark>
                    <Sun size={32} />
                    <Moon size={32} />
                    <Ball></Ball>
                </label>
               
                
            </Theme>                
                   
        </HomeContainer>
        
    )
}