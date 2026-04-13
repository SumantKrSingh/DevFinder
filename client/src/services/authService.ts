import { GoogleAuthProvider, signOut, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';

const Provider = new GoogleAuthProvider();

export const loginWithGoogle = () => signInWithPopup(auth, Provider);
export const logOut = () => signOut(auth);
