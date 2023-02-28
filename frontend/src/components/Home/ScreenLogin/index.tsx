import { LoginContainer,ButtonForm,ContainerButtonLogin,ButtonFacebook,ButtonGmail,SignUpHere} from "./ScreenLogin.styles";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FacebookIcon from '../../../assets/FacebookIconCorrect.svg'
import GoogleIcon from '../../../assets/GoogleIcon.svg'
import * as zod from 'zod'

const ValidationLogin = zod.object({
    login: zod.string().min(5,"Informe o login"),
    password: zod.string().min(5,"Informe a senha")
})

type ValidatrionFormData = zod.infer<typeof ValidationLogin>
export function ScreenLogin(){

    const{ register,handleSubmit,watch} = useForm<ValidatrionFormData>({
        resolver: zodResolver(ValidationLogin),
        defaultValues:{
            login:'',
            password:''
        }
    })

    
    function handleDataLogin(data:ValidatrionFormData){
        console.log(data)
    }


    const login = watch('login')
    const isLoginDisabled = !login
    return(
        <div>
        <LoginContainer onSubmit={handleSubmit(handleDataLogin)}>
            
            <form>

                <h1>LOGIN</h1>
                <p>User</p>
                <input {...register('login')} placeholder="Login"></input>
                <p>Password</p>
                <input type="password" placeholder="password" {...register('password')}></input>
                <ButtonForm disabled={isLoginDisabled}>Login</ButtonForm>
                <ContainerButtonLogin>
                    <ButtonFacebook>
                        <img src={FacebookIcon}/>
                        <span>Facebook</span>
                    </ButtonFacebook>
                    <ButtonGmail>
                        <img src={GoogleIcon}/>
                        <span>Gmail</span>
                    </ButtonGmail>
                </ContainerButtonLogin>
            </form>
              
            
        </LoginContainer>
        

        <SignUpHere>
            <span>Don't have an account?</span>
            <a href="">Sign up here</a>    
        </SignUpHere>

        </div>
    )
}