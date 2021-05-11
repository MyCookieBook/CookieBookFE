import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myCookieBook';

  /*constructor(private router: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['userId']
      });
  }*/
}
