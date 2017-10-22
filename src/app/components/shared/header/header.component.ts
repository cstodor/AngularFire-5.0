import { Component, OnInit } from '@angular/core';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import * as firebase from 'firebase/app';

// RxJS
import { Observable, } from 'rxjs/Observable';

// Service
import { AppService } from "../../../app.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usersRef: AngularFireObject<any>;
  currentUserRef: AngularFireObject<any>;
  currentUserId: string;
  currentUser: Observable<any>;
  isLoggedIn: boolean;
  user: Observable<firebase.User>;

  constructor(
    private afDb: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private as: AppService
  ) {
    this.usersRef = afDb.object('users');
    this.usersRef.valueChanges().subscribe(
      res => {
        console.log('User Value Changes. Toggling User Info in Header.');
        
        this.initializeUid();
        // console.log(res);
        // console.log(this.currentUserId);
        this.currentUserRef = afDb.object('users/' + this.currentUserId);
        this.currentUser = this.currentUserRef.valueChanges();
      }
    );
  }

  ngOnInit() {
    this.user = this.afAuth.authState;
  }

  initializeUid() {
    this.currentUserId = this.as.currentUserId;
  }

}
