import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class RealtimeDbService {

  itemsRef: AngularFireList<any>;

  constructor(
    private afDb: AngularFireDatabase
  ) {
    this.itemsRef = this.afDb.list('items');
  }

  updateList() {
    this.itemsRef.update('/',
      {
        item4: {
          title: 'CCC',
          size: 'medium',
          text: 'sample medium text',
          poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
          link: 'https://website.com'
        },
        item5: {
          title: 'BBB',
          size: 'large',
          text: 'sample large text',
          poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
          link: 'https://website.com'
        },
        item6: {
          title: 'AAA',
          size: 'large',
          text: 'sample large text',
          poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
          link: 'https://website.com'
        },
        item1: {
          title: 'FFF',
          size: 'small',
          text: 'sample small text',
          poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
          link: 'https://website.com'
        },
        item2: {
          title: 'EEE',
          size: 'small',
          text: 'sample small text',
          poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
          link: 'https://website.com'
        },
        item3: {
          title: 'DDD',
          size: 'medium',
          text: 'sample medium text',
          poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
          link: 'https://website.com'
        }
      }
    )
      .then(_ => console.log('List Reinitialized Successfully'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

}
