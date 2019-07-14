import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';
import { CorreosProvider } from '../../providers/correos/correos';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the NuevocorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevocorreo',
  templateUrl: 'nuevocorreo.html',
})
export class NuevocorreoPage {
  
  tipo: string;
  correo: any;
  nombre: string = 'Alexander Diaz';
  de: string = 'alexander@diaz.com';
  para: '';
  asunto: string = '';
  nuevoCorreo: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastProvider, public correos: CorreosProvider, public storage: Storage) {
    this.tipo = navParams.get('tipo');
    this.correo = navParams.get('correo');

    if ( this.tipo == 'Reply') {
      this.para = this.correo.direccion;
      this.asunto = 'RE: ' + this.correo.asunto;
    }

    if ( this.tipo == 'Forward') {
      this.asunto = this.correo.asunto;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevocorreoPage');
  }
  
  cerrar() {
    this.viewCtrl.dismiss();
  }

  enviarCorreo() {
    let correo = {
      nombre: this.nombre,
      de: this.de,
      para: this.para,
      asunto: this.asunto,
      mensaje: this.nuevoCorreo,
      fecha: new Date()
    }
    this.correos.enviados.push(correo);
    this.storage.set('correosEnviados', this.correos.enviados)
      .then()
      .catch(error => console.log('Error guardando en el storage'));
    console.log('Mensaje Enviado');
    console.log(correo);
    this.viewCtrl.dismiss();
    this.toastCtrl.crearToast('Correo Enviado');
  }

}
