import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppUser} from 'src/tyopescript/types/user';
import {AppState} from '../store';

type Authstate = {
  user: AppUser;
};
const initialState: Authstate = {
  user: null,
};

export const authslice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AppUser>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = authslice.actions;
export const selectUser = (state: AppState) => state.auth.user;

export default authslice.reducer;
