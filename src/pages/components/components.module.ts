import { SettingsProvider } from './../../providers/settings/settings';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsPage } from './components';
import { IonicImageViewerModule } from 'ionic-img-viewer';



@NgModule({
  declarations: [
    ComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentsPage),
    IonicImageViewerModule
  ],
  providers:[
    SettingsProvider
  ]
})
export class ComponentsPageModule {}
