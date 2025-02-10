import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list.component';



@NgModule({
  declarations: [JobListComponent],
  imports: [
    CommonModule
  ],
  exports: [JobListComponent]
})
export class JobListModule { }
