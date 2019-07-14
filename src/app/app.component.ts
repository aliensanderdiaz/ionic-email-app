import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { InboxPage } from '../pages/inbox/inbox';
import { EnviadosPage } from '../pages/enviados/enviados';
import { CorreosProvider } from '../providers/correos/correos';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('contenido') menu: NavController;
  rootPage:any = InboxPage;
  inbox:any = InboxPage;
  enviados:any = EnviadosPage;

  noLeidosInbox: number;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, public correos: CorreosProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.noLeidosInbox = correos.lista.length;
  }

  ir( pagina ) {
    this.menu.setRoot(pagina);
    this.menuCtrl.close();
  }
}

