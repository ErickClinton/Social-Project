import { LoginContainer } from "./ScreenLogin.styles";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


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
        <LoginContainer onSubmit={handleSubmit(handleDataLogin)}>
            
            <form>

                <h1>LOGIN</h1>
                <p>User</p>
                <input {...register('password')}></input>
                <p>Password</p>
                <input type="password" placeholder="Login" {...register('login')}></input>
                <button disabled={isLoginDisabled}>Login</button>
            </form>
            
            
        </LoginContainer>
    )
}