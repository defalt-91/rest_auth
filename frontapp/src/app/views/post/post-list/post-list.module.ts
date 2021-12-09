import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule }      	from "@angular/common";
import { NgModule }          	from "@angular/core";
import { MatPaginatorModule }	from "@angular/material/paginator";
import { MatTableModule } 	 	from "@angular/material/table";
import { RouterModule }      	from "@angular/router";
import { TableComponent } 	 	from "src/app/components/table/table.component";
import { PostListComponent } 	from "./post-list.component";


@NgModule({
		declarations: [
			PostListComponent,
			TableComponent
		],
		imports     : [
			CommonModule,
			RouterModule
				.forChild([{ path: "", component: PostListComponent }]),
			MatTableModule,
			MatPaginatorModule,
			MatFormFieldModule
		
		],
	})
export class PostListModule{}
