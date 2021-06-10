import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {HttpClientModule} from "@angular/common/http";

import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginDataComponent } from './login-data/login-data.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { RecipeOverviewPageComponent } from './recipe-overview-page/recipe-overview-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { InformationPrivacyPageComponent } from './information-privacy-page/information-privacy-page.component';
import { TeamPageComponent } from './team-page/team-page.component';

//Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    NavbarComponent,
    LoginPageComponent,
    LoginDataComponent,
    LoginRegisterComponent,
    FooterComponent,
    MainPageComponent,
    RecipeDetailPageComponent,
    RecipeOverviewPageComponent,
    ErrorPageComponent,
    HelpPageComponent,
    ContactPageComponent,
    InformationPrivacyPageComponent,
    TeamPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatListModule,
    AppRoutingModule,
    MatMenuModule,
    MatSelectModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,
  ],
  providers: [
    Validators,
    FormControl
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
