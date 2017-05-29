import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


   public quotes = [
    "Once you have their money, never give it back",
    "You can't cheat an honest customer, but it never hurts to try",
    "Never spend more for an acquisition than you have to",
    "If you can't break a contract, bend it",
    "Never let family stand in the way of opportunity",
    "Always keep you ears open",
    "Keep count of your change",
    "Instinct plus opportunity equals profit",
    "A dead customer can't buy as much as a live one",
    "Latinum isn't the only thing that shines"
  ]

  public quote = "";

  constructor(public navCtrl: NavController) {
    this.quote = this.randomQuote();
    console.log(this.quote);
  }

  newQuote(refresher) {
    //setTimeout idea from Ionic Docs!
    setTimeout( () => {
      this.quote = this.randomQuote();
      refresher.complete();
    }, 1000);
  }

  randomQuote() {
    return this.quotes[this.getRandomInt(0, this.quotes.length)];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
