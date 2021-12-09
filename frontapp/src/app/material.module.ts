import { NgModule }                 from '@angular/core';
import { MatButtonModule }          from "@angular/material/button";
import { MatCardModule }            from "@angular/material/card";
import { MatRippleModule }          from "@angular/material/core";
import { MatDividerModule }         from "@angular/material/divider";
import { MatExpansionModule }       from "@angular/material/expansion";
import { MatFormFieldModule }       from "@angular/material/form-field";
import { MatIconModule }            from "@angular/material/icon";
import { MatInputModule }           from "@angular/material/input";
import { MatListModule }            from "@angular/material/list";
import { MatMenuModule }            from '@angular/material/menu';
import { MatProgressBarModule }     from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule }         from "@angular/material/sidenav";
import { MatSnackBarModule }        from "@angular/material/snack-bar";
import { MatToolbarModule }         from "@angular/material/toolbar";
import { MatTooltipModule }         from "@angular/material/tooltip";
import { MatTreeModule }  			from '@angular/material/tree';
import { MatTableModule } 			from '@angular/material/table';
import { MatPaginatorModule } 		from '@angular/material/paginator';

const Material = [
	MatFormFieldModule,
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatInputModule,
	MatDividerModule,
	MatProgressBarModule,
	MatSnackBarModule,
	MatMenuModule,
	MatProgressSpinnerModule,
	MatCardModule,
	MatRippleModule,
	MatExpansionModule,
	MatTooltipModule,
	MatTreeModule,

];

@NgModule({exports: Material})
export class MaterialModule{}
