import { ButtonTheme } from '../../ButtonTheme'
import styles from './Header.module.css'
import {HomeContainer,Logo,ContainerHeader} from './Header.styles'


export function Header(){

    
    return(
        <HomeContainer>
            <ContainerHeader>
                <Logo>Olá, Bem vindos!</Logo>
                <Logo>Entre para o nosso time!</Logo>

            </ContainerHeader>
            
            <ButtonTheme />     
                
        </HomeContainer>
        
    )
}