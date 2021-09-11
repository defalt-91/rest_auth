import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCreateComponent } from './post-create.component';
import { RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PostCreateComponent }])
  ]
})
export class PostCreateModule { }
