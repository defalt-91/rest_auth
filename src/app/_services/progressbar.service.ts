import { Injectable }      from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ProgressService{
	public isLoading = new BehaviorSubject<boolean>(false);
	public isLoading$ = this.isLoading.asObservable()
}
