import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';

/**
 * Generated class for the CorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {

  correo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.correo = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }

  mostrarModal(tipo: string) {
    let modal = this.modalCtrl.create(NuevocorreoPage, { tipo: tipo, correo: this.correo});
    modal.present();
  }

}
