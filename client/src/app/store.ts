import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import githubReducer from '../features/github/githubSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    github: githubReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
