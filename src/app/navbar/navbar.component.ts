import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {Router} from "@angular/router";
import {UserLogoutService} from "./service/user-logout.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  logoutSuccess = false;
  status: Number;

  constructor(private userLogoutService: UserLogoutService, private router: Router) { }

  clickLogin() {
    //showLoginPage();
  }

  /*ngOnInit(): void {
  }*/
  handleSearchRecipe() {

  }

  handleLogout() {
    this.userLogoutService.logoutUser(JSON.parse(localStorage.getItem('UserID'))).subscribe((result) => {
      console.log(JSON.parse(localStorage.getItem('UserID')))
      localStorage.removeItem('UserID');
      this.logoutSuccess = true;
      this.status = +result;
      this.router.navigate(['/login'])
    })
  }
}
