import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MsgsComponent } from './home/msgs/msgs.component';
import { DependentsComponent } from './dependents/dependents.component';
import { AddComponent } from './dependents/add/add.component';
import { Http404Component } from './http-404/http-404.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard-service';
import { CanDeactivateGuard } from './dependents/add/can-deactivate-guard.service';


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent, 
    MsgsComponent, 
    DependentsComponent,
    AddComponent, 
    Http404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
