import { clientAuth } from "../admin";
import { getTokenResponse } from "./tokenT";
import { authInstance } from "../admin";

export async function makeLogin(userName: string, passWord: string): Promise<getTokenResponse | undefined> {
    try {
        const response = await clientAuth.signInWithEmailAndPassword(authInstance, userName, passWord)
        if (!response || !response.user) return undefined;

        const idToken = await response.user.getIdToken(true);
    
        return {
          access_token: idToken,
          refresh_token: response.user.refreshToken,
        };
    } catch (error) {
        return undefined
    }
}

export async function createUser(userName: string, passWord: string): Promise<getTokenResponse | undefined> {
    try {
        const response = await clientAuth.createUserWithEmailAndPassword(authInstance, userName, passWord)
        if (!response || !response.user) return undefined;

        const idToken = await response.user.getIdToken(true);
    
        return {
          access_token: idToken,
          refresh_token: response.user.refreshToken,
        };
    } catch (error) {
        return undefined
    }
}