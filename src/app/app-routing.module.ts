import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing
import { Routes, RouterModule } from '@angular/router';

//RoutingComponents
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: MainPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: '**', component: MainPageComponent} //wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    //CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
