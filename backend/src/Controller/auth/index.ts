import {Request, Response} from 'express'
import { createUser, makeLogin } from '../../Service/firebase/user';
import { preValidateUser } from './validations'

export async function login_handler(req: Request, res: Response) {
    try {
        const user = {
            'username': req.body.username,
            'password': req.body.password
        }
        if(preValidateUser(user)){
            const userToken = await makeLogin(user.username, user.password)
            return res.status(200).json(userToken)
        }else{
            return res.status(401).send("invalid user");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error in server");
    }
}

export async function createUser_handler(req: Request, res: Response) {
    try {
        const user = {
            'username': req.body.username,
            'password': req.body.password
        }
        if(preValidateUser(user)){
            const userCreated = await createUser(user.username, user.password)
            return res.status(200).json(userCreated)
        }else{
            return res.status(401).send("invalid user");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error in server");
    }
}