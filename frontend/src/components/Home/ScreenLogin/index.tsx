import { LoginContainer } from "./ScreenLogin.styles";


export function ScreenLogin(){
    return(
        <LoginContainer>
            
            <form>

                <h1>LOGIN</h1>
                <p>User</p>
                <input></input>
                <p>Password</p>
                <input type="password"></input>
                <button>Login</button>
            </form>
            
            
        </LoginContainer>
    )
}