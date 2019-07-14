import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from '../correo/correo';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  correo: any;

  correoPage = CorreoPage;

  listaCorreos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public correos: CorreosProvider, public modalCtrl: ModalController) {
    this.listaCorreos = correos.lista;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  verCorreo(correo) {
    this.navCtrl.push(this.correoPage, correo);
  }

  nuevoCorreo() {
    let modal = this.modalCtrl.create(NuevocorreoPage, { tipo: 'nuevo correo', correo: ''});
    modal.present();
  }

}
