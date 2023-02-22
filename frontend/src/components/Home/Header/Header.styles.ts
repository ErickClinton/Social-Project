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
    height:2.375rem;
    width:5rem;
    
    cursor:pointer;
    transition: color 0.1s, background-color 0.1s;
    background: ${(props)=> props.theme['red-correct']};
    color: ${(props)=> props.theme['white']};
    &:hover{

        background: ${(props)=>props.theme['green-300']};
        
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
export const Ball = styled.div`
    background-color: #0f0f10;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform .3s linear;


`

export const Light = styled.i`

`

export const Dark = styled.i`

`