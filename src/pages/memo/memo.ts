import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memo',
  templateUrl: 'memo.html',
})
export class MemoPage {
frequency: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  Submit(){
    console.log(this.frequency);
    this.storage.set("memo",this.frequency);
  }

}
