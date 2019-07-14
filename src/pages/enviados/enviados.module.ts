import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnviadosPage } from './enviados';

@NgModule({
  declarations: [
    EnviadosPage,
  ],
  imports: [
    IonicPageModule.forChild(EnviadosPage),
  ],
})
export class EnviadosPageModule {}
