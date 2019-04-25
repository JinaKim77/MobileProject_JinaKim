import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SettingsProvider } from './../../providers/settings/settings';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

/**
 * Generated class for the ComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-components',
  templateUrl: 'components.html',
})
export class ComponentsPage {
  articolo: any;
  data;
  selectedTheme: String;

  constructor(private socialSharing: SocialSharing,public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,public iab: InAppBrowser,private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  ionViewWillLoad(){
    this.articolo = this.navParams.get("components");
    this.articolo.publishedAt = this.articolo.publishedAt.split("T")[0];
    console.log(this.articolo);
    
  }

  openBrowser() {
    this.iab.create(this.articolo.url,'_system',{location:'no'});
  }
  

}
