import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobFilterComponent } from './components/job-filter.component';



@NgModule({
  declarations: [JobFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [JobFilterComponent]
})
export class JobFilterModule { }
