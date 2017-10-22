import { Component, OnInit } from '@angular/core';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

// RxJS
import { Observable } from 'rxjs/Observable';

// Services
import { AppService } from "../../../app.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  activeLoginProvider = '';
  user: Observable<firebase.User>;
  users: AngularFireList<any>;

  constructor(
    public afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private as: AppService
  ) {
    afDb.list<any>('users').valueChanges()
    // .subscribe(console.log);
  }

  ngOnInit() {
    this.user = this.afAuth.authState;
    this.checkUserState();
  }

  checkUserState() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        // Initialize User Details 
        let name = res.displayName;
        let email = res.email;
        let img = res.photoURL;
        let id = res.uid;
        let provider = this.activeLoginProvider
        this.users = this.afDb.list('/users');
        // Call Push Function With User Details
        // this.pushUserToDb(name, email, img, id, provider);
        this.changeUserStatus(id);
      } else {
        console.log('State: NOT logged in');
      }
    });
  }


  login(platform: string) {
    console.log('clicked login');
    if (platform === 'google') {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(() => {
          this.activeLoginProvider = platform;
          this.checkUserState();
          console.log('SUCCESSFULLY LOGGED IN');
        })
        .catch(err => console.log('THERE WAS AN ERROR: ' + err));
    } else if (platform === 'facebook') {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(() => {
          this.activeLoginProvider = platform;
          this.checkUserState();
          console.log('SUCCESSFULLY LOGGED IN');
        }).catch(err => console.log('THERE WAS AN ERROR: ' + err));
    } else if (platform === 'twitter') {
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
        .then(() => {
          this.activeLoginProvider = platform;
          this.checkUserState();
          console.log('SUCCESSFULLY LOGGED IN');
        }).catch(err => console.log('THERE WAS AN ERROR: ' + err));
    } else if (platform === 'github') {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then(() => {
          this.activeLoginProvider = platform;
          this.checkUserState();
          console.log('SUCCESSFULLY LOGGED IN');
        }).catch(err => console.log('THERE WAS AN ERROR: ' + err));
    } else if (platform === 'anonymous') {
      this.afAuth.auth.signInAnonymously()
        .then(() => {
          this.activeLoginProvider = platform;
          this.checkUserState();
          console.log('SUCCESSFULLY LOGGED IN');
        }).catch(err => console.log('THERE WAS AN ERROR: ' + err));
    } else if (platform === 'email-password') {
      this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider())
        .then(() => {
          this.activeLoginProvider = platform;
          this.checkUserState();
          console.log('SUCCESSFULLY LOGGED IN');
        }).catch(err => console.log('THERE WAS AN ERROR: ' + err));
    }
  }

  logout() {
    console.log('clicked logout');
    // Why is this function running when I log in the second time?
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('Setting Status to Offline!');
        this.users.update(res.uid, {
          status: 'offline'
        })
      }
    });

    this.afAuth.auth.signOut()
      .then(() => {
        console.log('Successfully Logged Out User!!!!')
      })
      .catch(err => console.log(err, 'You do not have access!'));
  }

  // Push User Details to Databse
  pushUserToDb(name: string, email: string, img: string, id: string, provider: string) {
    this.as.currentUserId = id;
    this.users.update(id, {
      name: name || 'Anonymous',
      email: email,
      picture: img || 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
      uid: id,
      loginProvider: provider
    })
      .then(() => console.log('Successfully Added User To Database'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  changeUserStatus(id: string) {
    this.as.currentUserId = id;
    console.log('Setting Status to Online!');
    this.users.update(id, {
      status: 'online'
    })
      .then(() => console.log('Successfully Added User To Database'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

}
