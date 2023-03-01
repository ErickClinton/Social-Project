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


export const ButtonContainer = styled.button`
    border:0;
    border-radius:10px;
    height:2rem;
    width:4rem;
    margin-right:0.5rem;
    cursor:pointer;
    transition: color 0.1s, background-color 0.5s;
    background: ${(props)=> props.theme['white']};
    color: ${(props)=> props.theme['black']};
    &:hover{

        background: ${(props)=>props.theme['gray-100']};
        
    }

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
export const Theme = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px 20px;
    justify-content: space-between;
    color:${(props)=>props.theme['black']}
`
export const BaseBall = styled.div`
    background-color: ${(props)=>props.theme['black']};
    border-radius: 50%;
    position: absolute;
    top:1px;
    left: 2px;
    height: 30px;
    width: 30px;
    transition: transform 1s linear;

`


export const BallDark = styled(BaseBall)`

    transform: translateX(0px);
    
    

`


export const BallLight = styled(BaseBall)`
    transform: translateX(30px);
    

`