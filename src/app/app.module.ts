import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatToolbarModule
} from '@angular/material/toolbar';

import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginDataComponent } from './login-data/login-data.component';
import { LoginRegisterComponent } from './login-register/login-register.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileDataComponent,
    ProfilePageComponent,
    NavbarComponent,
    LoginPageComponent,
    LoginDataComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  exports: [MatFormFieldModule, MatInputModule, FormsModule, MatToolbarModule, MatGridListModule, MatIconModule, MatButtonModule,MatCardModule, MatTabsModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
