import styles from './Header.module.css'
import { ButtonContainer, HomeContainer, PositionContainer, } from './Header.styles'


export function Header(){
    return(
        <HomeContainer>
            <PositionContainer >
                <ButtonContainer type="submit">Login</ButtonContainer>
                <ButtonContainer type="submit">Sign up</ButtonContainer>
            </PositionContainer>
        </HomeContainer>
        
    )
}