import {ActionReducerMap, MetaReducer,} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {routerReducer, RouterState} from "@ngrx/router-store";
import {storeFreeze} from 'ngrx-store-freeze';
import {UserState} from "./UserFeatureStore/reducers/user-feature-store.reducer";
// import {userFeatureKey, userReducer} from "./UserFeatureStore/reducers/user-feature-store.reducer";

export interface AppState {
  // router:RouterState;
  // user:UserState
}

export const reducers: ActionReducerMap<AppState> =
  {
    router: routerReducer,
    // user: userReducer,
  }

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];

