import { createReducer, on } from '@ngrx/store';
import * as UserActions      from '../actions/user-feature-store.actions';


export const userFeatureKey = 'user';

export interface State{
	IsAuthenticated: boolean;
	access_token?: string,
	access_token_expiration?: string
	refresh_token_expiration?: string;
	username: string;
	pk?: number;
	email?: string;
	first_name?: string;
	last_name?: string | null;
}

export const initialState: State = {
	username       : 'anonymous',
	IsAuthenticated: false,
	// access_token: '',
	// access_token_expiration: '',
	// refresh_token_expiration: '',
	// email: '',
	// first_name: '',
	// last_name: ''
};

export const userReducer = createReducer(
	initialState,
	on(UserActions.userAccessVerify, state => state),
	on(UserActions.userAccessVerifySuccess, (state, action) => state),
	on(UserActions.userAccessVerifyFailure, (state, action) => state),
	
	on(UserActions.getUser, state => state),
	on(UserActions.getUserSuccess, (state, action) => ({ ...state, ...action.data })),
	on(UserActions.getUserFailure, state => state),
	
	on(UserActions.clearStore, (state) => ({ ...initialState })),
	
	on(UserActions.userAccess, state => state),
	on(UserActions.userAccessSuccess, (state, { data }) => ({
		...state,
		access_token           : data.access,
		access_token_expiration: data.access_token_expiration
	})),
	on(UserActions.userAccessFailure, (state, action) => state),
	on(UserActions.userLogout, state => initialState),
	// on(UserActions.userLogoutSuccess,state  =>  state),
	// on(UserActions.userLogoutFailure,state  =>  state),
	on(UserActions.userLogin, state => state),
	on(UserActions.userLoginFailure, (state, action) => state),
	on(UserActions.userLoginSuccess, (state, action) => ({
			...state,
			// ...action.data
			IsAuthenticated         : true,
			access_token            : action.data.access_token,
			access_token_expiration : action.data.access_token_expiration,
			refresh_token_expiration: action.data.refresh_token_expiration,
			pk                      : action.data.user.pk,
			username                : action.data.user.username,
			email                   : action.data.user.email,
			last_name               : action.data.user.last_name,
			first_name              : action.data.user.first_name
		})
	)
);
