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

  constructor() {
    this.hideProfilePage = true;
    this.hideLoginPage = false;
  }

  showProfilePage() {
    this.hideProfilePage = false;
    this.hideLoginPage = true;
  }

  showLoginPage() {
    this.hideProfilePage = true;
    this.hideLoginPage = false;
  }
}
