import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {Router} from '@angular/router';
import {UserLogoutService} from './service/user-logout.service';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  logoutSuccess = false;
  // tslint:disable-next-line:ban-types
  status: Number;

  search = new FormControl('');

  constructor(private userLogoutService: UserLogoutService, private router: Router) { }

  /*clickLogin() {
    //showLoginPage();
  }*/

  /*ngOnInit(): void {
  }*/
  clickSearch(): any {
    this.handleSearchRecipe(this.search.value, 'freeSearch');
  }

  handleSearchRecipe(search: string, searchfield: string): any {
    localStorage.setItem('Search', search);
    localStorage.setItem('searchfield', searchfield);
    this.router.navigate(['/recipe/search']);
  }

  handleLogout(): any {
    this.userLogoutService.logoutUser(JSON.parse(localStorage.getItem('UserID'))).subscribe((result) => {
      console.log(JSON.parse(localStorage.getItem('UserID')));
      localStorage.removeItem('UserID');
      this.logoutSuccess = true;
      this.status = +result;
      this.router.navigate(['/login']);
    });
  }
}
