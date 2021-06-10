import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing
import { Routes, RouterModule } from '@angular/router';

//RoutingComponents
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { RecipeOverviewPageComponent } from './recipe-overview-page/recipe-overview-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { InformationPrivacyPageComponent } from './information-privacy-page/information-privacy-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { MorePageComponent } from './more-page/more-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: MainPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'recipe', component: RecipeDetailPageComponent},
  {path: 'recipe/search', component: RecipeOverviewPageComponent},
  {path: 'help', component: HelpPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'information_privacy', component: InformationPrivacyPageComponent},
  {path: 'team', component: TeamPageComponent},
  {path: 'more', component: MorePageComponent},
  {path: 'error404', component: ErrorPageComponent},
  {path: '**', component: ErrorPageComponent} //wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    //CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
