import { State } from "../model/state.model";


export const initialState: State = {
  isLogged: false,
  user: {
    _id: '',
    name: '',
    email: '',
    contactNumber: 0,
  },
};
