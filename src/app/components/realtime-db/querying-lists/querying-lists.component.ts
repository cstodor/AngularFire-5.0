import { Component, OnInit } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

// RxJS
import { Observable } from 'rxjs/Observable';

// Services
import { RealtimeDbService } from "../realtime-db.service";

@Component({
  selector: 'app-querying-lists',
  templateUrl: './querying-lists.component.html',
  styleUrls: ['./querying-lists.component.css']
})
export class QueryingListsComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(
    private afDb: AngularFireDatabase,
    private rds: RealtimeDbService
  ) {
    this.itemsRef = this.afDb.list('items', ref => ref.limitToLast(2));
    // Use snapshotChanges().map() to store the key and rerun when chnages are detected
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      console.log(changes);
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    // this.items = this.itemsRef.valueChanges();
    this.rds.updateList();
  }

  ngOnInit() {
  }

  goToLink(link) {
    console.log(link);
    // window.location.href = link;
    window.open(link, '_blank'); // opens in a new tab
  }

}
