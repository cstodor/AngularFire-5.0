import { Injectable } from '@angular/core';
// Facebook Share
import { FacebookService, InitParams } from 'ngx-facebook';

import { FB_SHARE_APP_ID } from "./constants";

@Injectable()
export class AppService {

  currentUserId: string = '';

  constructor(
    private fb: FacebookService
  ) { }

  initializeFbShare() {
    // Facebook Share App Config
    const initParams: InitParams = {
      appId: FB_SHARE_APP_ID,
      xfbml: true,
      version: 'v2.10'
    };
    this.fb.init(initParams);
  }

}
