import { Injectable }                                      from '@angular/core';
import { Actions, createEffect, ofType }                   from '@ngrx/effects';
import { ROUTER_CANCEL, ROUTER_NAVIGATED, ROUTER_REQUEST } from "@ngrx/router-store";
import { map }                                             from "rxjs/operators";
import { UI_Loading_False, UI_Loading_True }               from "src/app/store/ui/ui.actions";


@Injectable()
export class UiEffects{
	Loading$ = createEffect(
		() => this.actions$.pipe(
			ofType(ROUTER_REQUEST),
			map(() => UI_Loading_True()),
		), { dispatch: true });
	Loading_end$ = createEffect(() => this.actions$.pipe(
		ofType(ROUTER_NAVIGATED, ROUTER_CANCEL),
		map(() => UI_Loading_False())
	));
	
	constructor(private actions$: Actions) {}
}
