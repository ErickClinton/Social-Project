import {firebaseAdminCredential, firebaseClientCredential} from "./environmentT";
import {config} from "dotenv";

config()

export const firebaseAdminCredentialsJSON = process.env.FIREBASE_ADMIN_CRED || "";
export const firebaseAdminCredentials = JSON.parse(firebaseAdminCredentialsJSON) as firebaseAdminCredential;

export const firebaseClientCredentialsJSON = process.env.FIREBASE_CLIENT_CRED || "";
export const firebaseClientCredentials = JSON.parse(firebaseClientCredentialsJSON) as firebaseClientCredential;