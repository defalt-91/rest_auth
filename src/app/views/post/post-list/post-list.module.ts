import { CommonModule }      from "@angular/common";
import { NgModule }          from "@angular/core";
import { RouterModule }      from "@angular/router";
import { PostListComponent } from "./post-list.component";


@NgModule(
	{
		declarations: [PostListComponent,],
		imports     : [
			CommonModule,
			RouterModule.forChild([{ path: "", component: PostListComponent }])
		
		],
	})
export class PostListModule{}
