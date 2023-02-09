import { userT } from "./authT";

export function preValidateUser(user: userT): boolean {
    if(user.username == null || user.username == ""){
        return false;
    }
    if(user.password == null || user.password == ""){
        return false;
    }
    return true;
}