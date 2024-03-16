import { UsersResponse } from "./app.model";

export interface State {
    isLogged : boolean;
    user : UsersResponse
}