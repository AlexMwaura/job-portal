import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [JobListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [JobListComponent]
})
export class JobListModule { }
