import {Component, OnInit} from '@angular/core';
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
  status: Number;

  search = new FormControl('');

  constructor(private userLogoutService: UserLogoutService, private router: Router) {
  }

  clickNewRecipe() {
    sessionStorage.setItem('RecipeID', '0');
    if (this.router.url === '/recipe') {
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    } else {
      this.router.navigate(['/recipe']);
    }
  }

  clickSearch() {
    this.handleSearchRecipe(this.search.value, 'freeSearch');
  }

  handleSearchRecipe(search: string, searchfield: string) {
    localStorage.setItem('Search', search);
    localStorage.setItem('Searchfield', searchfield);
    if (this.router.url === '/recipe/search') {
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    } else {
      this.router.navigate(['/recipe/search']);
    }
    // this.router.navigate(['/recipe/search']);
  }

  clickProfile() {
  if (this.router.url === '/profile') {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  } else {
    this.router.navigate(['/profile']);
  }
  }

  handleLogout() {
    this.userLogoutService.logoutUser(JSON.parse(localStorage.getItem('UserID'))).subscribe((result) => {
      localStorage.removeItem('UserID');
      this.logoutSuccess = true;
      this.status = +result;
      this.router.navigate(['/login']);
    });
  }
}
