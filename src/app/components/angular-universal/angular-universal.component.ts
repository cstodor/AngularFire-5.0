import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJS
import { Observable } from "rxjs/Observable";

// Constants
import { REPOS_LIST } from "../../constants";

@Component({
  selector: 'app-angular-universal',
  templateUrl: './angular-universal.component.html',
  styleUrls: ['./angular-universal.component.css']
})
export class AngularUniversalComponent implements OnInit {

  repos: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    this.repos = this.http.get(REPOS_LIST);
    console.log(this.repos);
    
  }

  ngOnInit() {
  }

}
