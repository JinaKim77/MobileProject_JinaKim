import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {ComponentsPage} from "../components/components";
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  information:string;

  articles: any;
  api: string = "";
  prova;
  source=[];
  selectedSource: String="ansa";
  selectedTheme: String;
  open;

  constructor(public navCtrl: NavController, private storage: Storage,public http: Http,public modalCtrl: ModalController,public loadingCtrl: LoadingController,public alertCtrl: AlertController, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.loadSource();
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

ionViewDidLoad(){
 this.loadData();
}

  loadSource(){
    this.http.get('https://newsapi.org/v2/sources?apiKey=706089d6dc5348d5b520a830bd9c586b'+this.api).map(res => res.json()).subscribe(
      data => {
        this.source = data.sources;
        console.log(this.source[0].id);
      }, err => {
          console.log("Sorry...");
      }
  );
  }

  loadData(){
    const loader = this.loadingCtrl.create({
      content: "Loading News...^^;;;"
    });
    loader.present();
    this.http.get('https://newsapi.org/v2/top-headlines?sources='+this.selectedSource+'&apiKey=706089d6dc5348d5b520a830bd9c586b'+this.api).map(res => res.json()).subscribe(
      data => {
        this.articles = data.articles;
        loader.dismiss();
      }, err => {
        loader.dismiss();
          console.log("Sorry..");
      }
  );
  }

  openModal(event){ 
    const modal = this.modalCtrl.create("ComponentsPage", {components : event});
    modal.present();
  }

  chooseSource(source){
    this.selectedSource = source;
    this.loadData();
  }

  openMemoPage(){
    this.navCtrl.push('MemoPage');
  }

  ionViewWillEnter(){
    this.storage.get("memo").then((val) => { this.information =val; }).catch((err) =>{console.log(err);
    });
  }

 

}