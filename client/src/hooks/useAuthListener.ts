import { useEffect } from 'react';
import { useAppDispatch } from './redux.hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import type { AuthUser } from '../types/auth.types';
import { setLoading, setUser } from '../features/auth/authSlice';

const useAuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const user: AuthUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoUrl: firebaseUser.photoURL,
        };
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
      dispatch(setLoading(false));
    });

    return () => unSubscribe();
  }, [dispatch]);
};

export default useAuthListener;
