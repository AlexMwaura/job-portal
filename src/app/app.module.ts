import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { JobFilterModule } from './pages/job-filter/job-filter.module';
import { JobListModule } from './pages/job-list/job-list.module';
import { NavbarModule } from './pages/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { JobDetailsComponent } from './pages/job-details/components/job-details.component';
import { JobApplicationComponent } from './pages/job-application/components/job-application/job-application.component';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent,
    JobApplicationComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    NavbarModule,
    JobFilterModule,
    JobListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
