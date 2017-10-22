import { Component, OnInit } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";

// RxJS
import { Observable, } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(afDb: AngularFireDatabase) {
    this.itemRef = afDb.object('item');
    this.item = this.itemRef.valueChanges();
    // Get the data as the original snapshot and run it when changes are detected 
    this.itemRef.snapshotChanges().subscribe(res => {
      console.log('Type: ', res.type);
      console.log('Key: ', res.key);
      console.log('Payload.val(): ', res.payload.val());
    });
    this.updateSingleItem();
  }

  ngOnInit() {

  }

  updateSingleItem() {
    this.itemRef.set(
      {
        example: 'UNEDITABLE',
        title: 'Item 1',
        size: 'small',
        text: 'sample small text',
        poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
        link: 'https://website.com'
      }
    )
      .then(_ => console.log('Single Item Reinitialized Successfully'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  save(title: string, size: string, text: string, link: string, image: string) {
    this.itemRef.set({
      title: title,
      size: size,
      text: text,
      link: link,
      poster: image
    })
      .then(_ => console.log('Single Item Set Successfully'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  update(title: string, size: string, text: string, link: string, image: string) {
    this.itemRef.update({
      title: title,
      size: size,
      text: text,
      link: link,
      poster: image
    })
      .then(_ => console.log('Single Item Updated Successfully'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  delete() {
    this.itemRef.remove()
      .then(_ => console.log('Single Item Deleted Successfully'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  goToLink(link: string) {
    // window.location.href = link;
    window.open(link, '_blank'); // opens in a new tab
  }
}
