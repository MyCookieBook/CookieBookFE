import { Component, OnInit } from '@angular/core';
//import { app.component.ts } from './app.component.ts'
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent /*implements OnInit*/ {

  constructor() { }

  clickLogin() {
    //showLoginPage();
  }

  /*ngOnInit(): void {
  }*/

}
