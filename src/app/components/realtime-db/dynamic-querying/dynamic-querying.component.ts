import { Component } from '@angular/core';

// Firebase
import * as firebase from "firebase";
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';

// RxJS
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dynamic-querying',
  templateUrl: './dynamic-querying.component.html',
  styleUrls: ['./dynamic-querying.component.css']
})
export class DynamicQueryingComponent {

  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string | null>;

  constructor(afDb: AngularFireDatabase) {
    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.switchMap(size =>
      afDb.list('/items', ref =>
        size ? ref.orderByChild('size').equalTo(size) : ref
      ).snapshotChanges()
    );
  }

  filterBy(size: string | null) {
    this.size$.next(size);
  }

}
