import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../model/state.model';


export const userSelectorState = createFeatureSelector<State>('appReducer');

export const selectIsLogged = createSelector(
  userSelectorState,
  (state: State) => state.isLogged
);

export const user = createSelector(userSelectorState, (state: State) => {
  return {
    _id: state.user._id,
    name: state.user.name,
    email: state.user.email,
    contactNumber: state.user.contactNumber,
  };
});
