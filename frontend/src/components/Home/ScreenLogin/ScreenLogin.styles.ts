
import styled from 'styled-components'

const BaseButton = styled.button`
    height: 45px;
    
    border-radius: 10px;
    font-size: 20px;
    font-weight: bolder;
    border: none;
    
    cursor: pointer;
    color: #121213;
    transition: all 1s;

`
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
    
`

export const ButtonForm= styled(BaseButton)`
    transition: all 1s;
    margin-top: 25px;
    background-color: ${(props)=>props.theme['red-correct']};
        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
`

export const ContainerButtonLogin = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:2rem;
`


export const ButtonFacebook=styled(BaseButton)`
    
    img{
        height:3rem;
         
    }
    
    display: flex;
    justify-content: center;
    width:9rem;
    background-color: ${(props)=>props.theme['blueFacebook']};
    &:hover{
        background-color: ${(props)=>props.theme['blueDarkFacebook']};
    }
    span{
        margin-top:0.75rem;
        margin-right:1rem;
    }

`



export const ButtonGmail=styled(BaseButton)`
    display: flex;
    justify-content: center;
    width:9rem;
    margin-left:1rem;
    img{
        height:3rem;    
        margin-left:0.5rem;    
    }
    
    span{
        margin-top:0.75rem;
        margin-right:1rem;
        
    }
`