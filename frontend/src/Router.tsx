import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Login" element={<SignUp/>}/>
        </Routes>
    )
}