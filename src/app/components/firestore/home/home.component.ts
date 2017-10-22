import { Component, OnInit } from '@angular/core';

// Firebase
import { AngularFirestore } from 'angularfire2/firestore'; // BETA

// RxJs
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fsItems: Observable<any[]>;

  constructor(
    afFs: AngularFirestore
  ) {
    this.fsItems = afFs.collection('items').valueChanges();

  }

  ngOnInit() {
  }

}
