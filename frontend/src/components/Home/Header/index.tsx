import styles from './Header.module.css'
import { ButtonContainer, HomeContainer,Logo,ContainerHeader,BallDark,BallLight,Theme} from './Header.styles'
import { Moon,Sun} from "phosphor-react";

interface chooseThemeProps{
    ChooseTheme: boolean
}
export function Header({chooseTheme,theme}){

    
    return(
        <HomeContainer>
            <ContainerHeader>
                <Logo>Olá, Bem vindos!</Logo>
                <Logo>Entre para o nosso time!</Logo>

            </ContainerHeader>
            
            <Theme>
                
                <ButtonContainer aria-hidden="true" onClick={chooseTheme}>
                    <Moon size={32} />
                    <Sun size={28} />
                    
                    {theme?
                        (<BallDark/>):
                        (<BallLight/>)
                    }
                </ButtonContainer>
                
                
            </Theme>                
                
        </HomeContainer>
        
    )
}