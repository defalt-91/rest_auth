import { Injectable }                  from '@angular/core';
import { Store }                       from "@ngrx/store";
import { BehaviorSubject, Observable } from "rxjs";
import { AppState }                    from "src/app/store";
import { selectDarkTheme }             from "src/app/store/ui/ui.reducer";


@Injectable({ providedIn: 'root' })
export class UIService{
	isLoading                   = new BehaviorSubject<boolean>(false);
	isDark: Observable<boolean> = this.store.select(selectDarkTheme);
	private bodyElement                 = document.body;
	
	// isLoading$                  = this.isLoading.asObservable();
	
	constructor(private store: Store<AppState>) {}
	
	ChangeTheme() {
		this.isDark.subscribe(
			(x) => !x ?
				this.bodyElement.classList.remove(`dark-theme`) :
				this.bodyElement.classList.add(`dark-theme`)
		)
	}
}
