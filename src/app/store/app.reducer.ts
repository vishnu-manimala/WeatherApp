import { createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
import { loginInitialized, loginSuccess, logout } from './app.action';

export const userReducer = createReducer(
  initialState,

  on(loginSuccess, (state, action) => {
    console.log(action.user)
    return {
      ...state,
      isLogged: true,
      user: action.user,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      isLogged: false,
      user: initialState.user,
    };
  })
);
