import { createAction } from '@ngrx/store';


export enum UiActions{
	loadingTrue  = '[UI] Loading True',
	loadingFalse = '[UI] Loading False'
}

export const UI_Loading_True = createAction(UiActions.loadingTrue);
export const UI_Loading_False = createAction(UiActions.loadingFalse);