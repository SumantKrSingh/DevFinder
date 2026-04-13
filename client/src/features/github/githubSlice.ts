import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { GithubUser } from '../../types/github.types';
import { fetchGithubUser } from '../../services/githubApi';

interface GitHubState {
  user: GithubUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: GitHubState = {
  user: null,
  loading: false,
  error: null,
};

export const SearchGithubUser = createAsyncThunk(
  'github/searchUser',
  async (username: string, { rejectWithValue }) => {
    try {
      return await fetchGithubUser(username);
    } catch {
      return rejectWithValue('User Not found');
    }
  }
);

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SearchGithubUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        SearchGithubUser.fulfilled,
        (state, action: PayloadAction<GithubUser>) => {
          state.loading = false;
          state.user = action.payload;
        }
      )
      .addCase(SearchGithubUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearUser } = githubSlice.actions;
export default githubSlice.reducer;
