import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myCookieBook';

  hideProfilePage;
  hideLoginPage;
  hideMainPage;

  constructor() {
    this.hideProfilePage = true;
    this.hideLoginPage = false;
    this.hideMainPage = true;
  }

  showProfilePage() {
    this.hideProfilePage = false;
    this.hideLoginPage = true;
    this.hideMainPage = true;
  }

  showLoginPage() {
    this.hideProfilePage = true;
    this.hideLoginPage = false;
    this.hideMainPage = true;
  }

  showMainPage() {
    this.hideProfilePage = true;
    this.hideLoginPage = true;
    this.hideMainPage = false;
  }
}
