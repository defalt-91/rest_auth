import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUser from '../reducers/user-feature-store.reducer';

export const selectUserState = createFeatureSelector<fromUser.UserState>(
  fromUser.userFeatureKey
);
export const select_access_token_expiration =
  createSelector(selectUserState,
    (state) => state.access_token_expiration)
export const select_access_token =
  createSelector(selectUserState,
    (state) => state.access_token)
export const isLoggedIn = createSelector(
  selectUserState,
  user => user.loggedIn
)
export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
)
