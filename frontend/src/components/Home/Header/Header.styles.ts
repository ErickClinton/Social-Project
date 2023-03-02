import styled from 'styled-components'


export const HomeContainer =styled.div `

    
    display:flex;
    position:relative;
    justify-content:center;
    padding:3.25rem 0;
    align-items:center;
    justify-content:space-between;
    input{
            opacity: 0;
            position: absolute;
        }
    label{
        background-color: ${(props)=>props.theme['white-mode']};
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        height: 26px;
        width: 50px;
        transform: scale(1.2);

        

        margin-right:2rem;
        
        
    
    
`




export const Logo = styled.span`
    margin-left:5rem;
    
    font-size:3rem;
    justify-content: center;
    
`


export const ContainerHeader = styled.p`
    display: flex;
    
    flex-direction:column;
`
