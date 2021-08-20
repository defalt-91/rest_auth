import { Component, OnInit } from '@angular/core';
import { Store }             from "@ngrx/store";
import { selectLoading }     from "src/app/store/ui/ui.reducer";


@Component({
	           selector   : 'app-loader',
	           templateUrl: './loader.component.html',
	           styleUrls  : ['./loader.component.scss']
           })
export class LoaderComponent{
	loading$ = this.store.select(selectLoading);
	constructor(private store: Store) { }

}
