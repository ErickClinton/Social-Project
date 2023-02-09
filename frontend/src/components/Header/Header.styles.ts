import styled from 'styled-components'


export const HomeContainer =styled.div `

    background:${(props)=> props.theme['purpleDark']};
    display:flex;
    position:relative;
    justify-content:center;
    padding:3.25rem 0;
    align-items:center;
    justify-content:space-between;
`
export const PositionContainer = styled.div`
    display: flex;
    gap:1rem;
`

export const ButtonContainer = styled.button`
    border:0;
    border-radius:10px;
    height:2.375rem;
    width:5rem;
    
    cursor:pointer;
    transition: color 0.1s, background-color 0.1s;
    
    &:hover{

        background: ${(props)=>props.theme['OrangeRed']};
        
    }

`

export const Logo = styled.span`
    margin-left:5rem
`


