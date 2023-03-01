import { createGlobalStyle } from 'styled-components'


interface Props{
    tema:{
        teste:string,
    }
}

export const GlobalStyleDark = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        #box-shadow: 0 0 0 2px ${(props) => props.theme['red-correct']};
    }
    body{
        background-color: ${(props) => props.theme['black']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing:antialiased;
        
        padding:0;
        margin:0;
    }
    

    
    body,input,textarea,button{
        font-family: 'Roboto',sans-serif;
        font-weight: 400px ;
        font-size: 1rem;
    }

`

export const GlobalStyleLight = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        #box-shadow: 0 0 0 2px ${(props) => props.theme['red-correct']};
    }
    body{
        background-color: ${(props) => props.theme['white']};
        color: ${(props) => props.theme['black']};
        -webkit-font-smoothing:antialiased;
        
        padding:0;
        margin:0;
    }
    

    
    body,input,textarea,button{
        font-family: 'Roboto',sans-serif;
        font-weight: 400px ;
        font-size: 1rem;
    }

`
