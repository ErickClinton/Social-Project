import styled from 'styled-components'

export const Theme = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px 20px;
    justify-content: space-between;
    color:${(props)=>props.theme['black']}
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