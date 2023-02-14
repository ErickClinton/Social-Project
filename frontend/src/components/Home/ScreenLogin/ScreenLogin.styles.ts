
import styled from 'styled-components'

export const LoginContainer = styled.div`
    margin-top:5rem;
    margin-right:15rem;
    width:30rem;
     height:25rem;
    border-radius: 15px;
    box-shadow: 0px 2px 22px 0px ${(props)=>props.theme['blue']};
    
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        width: 78%;
        padding:30px 50px; 
        
        display: flex;
        flex-direction: column;
        
        input{
            
            margin-bottom:1rem;
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
    button{
        height: 45px;
        margin-top: 25px;
        border-radius: 10px;
        font-size: 20px;
        font-weight: bolder;
        border: none;
        background-color: ${(props)=>props.theme['red-correct']};
        cursor: pointer;
        color: #121213;
        transition: all 1s;
    }
`