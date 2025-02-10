import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { JobFilterModule } from '../job-filter/job-filter.module';
import { JobListModule } from '../job-list/job-list.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    JobFilterModule,
    JobListModule
  ]
})
export class HomeModule { }
