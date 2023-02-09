import styles from './Header.module.css'
import { ButtonContainer, HomeContainer,PositionContainer,Logo } from './Header.styles'
import {NavLink} from 'react-router-dom'

export function Header(){
    return(
        <HomeContainer>
            <Logo>Logo</Logo>
            <PositionContainer >
                <NavLink to="/login">
                    <ButtonContainer type="submit">Login</ButtonContainer>
                </NavLink>
                <NavLink to="/SignUp">
                    <ButtonContainer type="submit">Sign up</ButtonContainer>
                </NavLink>              
            </PositionContainer>            
        </HomeContainer>
        
    )
}