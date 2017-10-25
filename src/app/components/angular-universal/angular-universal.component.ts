import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJS
import { Observable } from "rxjs/Observable";

// const USERS_DATA = '../../../../../api/json/MOCK_DATA.json';

const USERS_DATA = 'https://api.github.com/users/cstodor/repos'

@Component({
  selector: 'app-angular-universal',
  templateUrl: './angular-universal.component.html',
  styleUrls: ['./angular-universal.component.css']
})
export class AngularUniversalComponent implements OnInit {

  users: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    this.users = this.http.get(USERS_DATA);
    console.log(this.users);
    
  }

  ngOnInit() {
  }

}
