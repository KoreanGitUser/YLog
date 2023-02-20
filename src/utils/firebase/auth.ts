import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@utils/firebase";

/* firebase console **/

// sgin-up
export const signUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// login
export const Login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

// logout
export const logout = signOut;
