import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/components/home.component';
import { JobDetailsComponent } from './pages/job-details/components/job-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route,
  { path: 'job/:id', component: JobDetailsComponent }, // Route for job details
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
