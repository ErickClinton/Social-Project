import { Header } from "../../components/Home/Header";
import{ScreenLogin} from "../../components/Home/ScreenLogin"
import {HomeContainer,LoginImgContainer}from "./Home.styles"

export function Home({chooseTheme,theme}){
    
    return(
        <HomeContainer>
            <Header chooseTheme={chooseTheme} theme={theme}/>
            
            <LoginImgContainer>
                <h1>IMAGEM </h1>
                <ScreenLogin/>
                
            </LoginImgContainer>
        </HomeContainer>
        
    )
}