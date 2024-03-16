import { createAction, props } from "@ngrx/store";

import { UsersResponse } from "../models/app.model";

export const loginInitialized = createAction('[login] loginInitialized',props<{username:string, password:string}>());
export const loginSuccess = createAction('[login] loginSuccess',props<{user:UsersResponse}>());
export const loginFailed  = createAction('[login] loginFailed');
export const logout = createAction('logout')


