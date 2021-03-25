import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) { }

  // presentAlert() {
  //   this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Subtitle',
  //     message: 'This is an alert message.',
  //     buttons: ['OK']
  //   }).then(function (alert){
  //     alert.present();
  //   })
  // }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Deseja mesmo fazer isso?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Sim!',
          handler: function(){ // repare que isso é um callback
            console.log("Confirmado")
          }
        }
      ]
    });

    alert.present();
  }

}