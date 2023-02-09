import * as admin from "firebase-admin";
import {initializeApp} from "firebase/app";
import * as firebase from "firebase/auth";
import {
  firebaseAdminCredentials,
  firebaseClientCredentials,
} from "../../../Environment";

// admin firestore
admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: firebaseAdminCredentials.client_email,
    privateKey: firebaseAdminCredentials.private_key,
    projectId: firebaseAdminCredentials.project_id,
  }),
});
export const adminFirestore: admin.firestore.Firestore = admin.firestore();
adminFirestore.settings({ignoreUndefinedProperties: true});

// admin auth
export const adminAuth: admin.auth.Auth = admin.auth();

// client auth
const firebaseClientApp = initializeApp(firebaseClientCredentials);
firebase.initializeAuth(firebaseClientApp);
export const clientAuth = firebase;
export const authInstance = firebase.getAuth(firebaseClientApp);

export default {
  adminFirestore,
  adminAuth,
  clientAuth,
  authInstance
};