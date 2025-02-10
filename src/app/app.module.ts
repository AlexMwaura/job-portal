import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { JobFilterModule } from './pages/job-filter/job-filter.module';
import { JobListModule } from './pages/job-list/job-list.module';
import { NavbarModule } from './pages/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    JobFilterModule,
    JobListModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
