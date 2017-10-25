import { Component, OnInit } from '@angular/core';

// Facebook Share
import { FacebookService, UIParams, UIResponse, InitParams } from 'ngx-facebook';

// Services
import { AppService } from "../../app.service";

// Constants
import { APP_DOMAIN } from "../../constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private as: AppService,
    private fb: FacebookService
  ) {
    this.as.initializeFbShare();
  }

  ngOnInit() {

  }

  sharePage() {
    const params: UIParams = {
      href: APP_DOMAIN,
      method: 'share'
    };
    this.fb.ui(params)
      .catch((e: any) => console.error(e));
  }

}
