import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PostListComponent } from "./post-list.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [PostListComponent,],
  imports: [CommonModule, MatSnackBarModule,
    RouterModule.forChild([{
      path: "",
      component: PostListComponent
    }]), MatTooltipModule, MatButtonModule, MatFormFieldModule, FormsModule,
  ],
})
export class PostListModule {}
