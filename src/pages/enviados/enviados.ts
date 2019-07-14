import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from '../correo/correo';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the EnviadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enviados',
  templateUrl: 'enviados.html',
})
export class EnviadosPage {
  
  correoPage = CorreoPage
  listaDeCorreos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public correos: CorreosProvider, public modalCtrl: ModalController, public storage: Storage) {
    // this.listaDeCorreos = correos.enviados;
  }

  ionViewWillEnter() {    
    this.storage.get('correosEnviados')
      .then(data => {
        if ( data == null ) {
          this.listaDeCorreos = [];
          this.correos.enviados = [];
        } else {
          this.listaDeCorreos = data;
          this.correos.enviados = this.listaDeCorreos;
        }
      })
      .catch(error => console.log('Error cargando los correos Enviados :('));    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnviadosPage');
  }
  
  verCorreo(correo) {
    this.navCtrl.push(this.correoPage, correo);
  }

  nuevoCorreo() {
    let modal = this.modalCtrl.create(NuevocorreoPage, { tipo: 'nuevo correo', correo: ''});
    modal.present();
  }

}
