import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { JobListComponent } from './pages/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JobListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
