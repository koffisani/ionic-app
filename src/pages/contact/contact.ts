import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public cats = [];

  constructor(public navCtrl: NavController) {
    //create some initial cats
    for(let i=0; i < 25; i++) {
      this.cats.push('Cat ' + i);
    }
  }
/**
 * Generates more cats to display as more as user 
 * scrolls down 
 * @param infiniteScroll event
 */
  moreCats(infiniteScroll) {
    //setTimeout 
    setTimeout(() => {
      for(let i=0; i < 25; i++) {
        this.cats.push('Cat ' + (this.cats.length + 1));
      }
      infiniteScroll.complete();
    }, 1000);
  }

}
