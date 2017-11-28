import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MsgsComponent } from './home/msgs/msgs.component';
import { DependentsComponent } from './dependents/dependents.component';
import { AddComponent } from './dependents/add/add.component';
import { Http404Component } from './http-404/http-404.component';
import { AuthGuard } from './auth-guard-service';
import { CanDeactivateGuard } from './dependents/add/can-deactivate-guard.service';
import { TobaccoComponent } from './tobacco/tobacco.component';

const appPaths: Routes = [
    { path: '', component: HomeComponent},
    { path: 'msgs', component: MsgsComponent},
    { path: 'dependents', component: DependentsComponent,
        // canActivate: [AuthGuard]
        canActivateChild: [AuthGuard]
    },
    { path: 'add', component: AddComponent, canDeactivate: [CanDeactivateGuard]},
    { path: 'tobacco', component: TobaccoComponent},
    { path: 'http-404', component: Http404Component},
    { path: '**', redirectTo: '.http-404'}
    // { path: 'users/:id/:name', component:UserComponent}
  ];

@NgModule( {
    imports: [
        RouterModule.forRoot(appPaths, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
