import { createReducer, createSelector, on } from '@ngrx/store';
import { AppState }                          from "src/app/store/index";
import { UI_Loading_False, UI_Loading_True } from "src/app/store/ui/ui.actions"


export const uiFeatureKey = 'ui';

export interface State{
	Loading: boolean;
}

export const initialState: State = {
	Loading: false
};

export const reducer = createReducer(
	initialState,
	on(UI_Loading_True, (state, action) => ({ ...state, Loading: true })),
	on(UI_Loading_False, (state, action) => ({ ...state, Loading: false }))
);

export const selectUI = (state: AppState) => state.ui;
export const selectLoading = createSelector(selectUI, (state: State) => state.Loading);