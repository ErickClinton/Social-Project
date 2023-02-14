
import styled from 'styled-components'

export const LoginContainer = styled.div`
    margin-right:15rem;
    
    padding:10rem;  
    border-radius: 15px;
    box-shadow: 0px 2px 22px 0px #000000cc;
    
    align-items: center;
    
    form{
        display: flex;
        flex-direction: column;
        
        input{
            background-color: ${(props)=>props.theme['gray']};
            border: none;
            border-radius: 10px;
            padding: 15px;
            color: ${(props)=>props.theme['white']};
            
        }
    }
    
    h1{
        position:relative;
        
        text-align:center;
        
        
    }
`