import { Outlet } from "react-router-dom";

import {HomeContainer,LoginImgContainer}from "./Home.styles"
import { Header } from "./components/Header";
import { ScreenLogin } from "./components/ScreenLogin";

export function Home(){
    
    return(
        <HomeContainer>
            <Header />
            
            <LoginImgContainer>
                <h1>IMAGEM </h1>
                <ScreenLogin/>
                
            </LoginImgContainer>
            <Outlet/>
        </HomeContainer>
        
    )
}