import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.page.html',
  styleUrls: ['./list-player.page.scss'],
})
export class ListPlayerPage implements OnInit {

  protected players: any;
  constructor(
    protected playerService:PlayerService,
    private router:Router,
    protected alertController:AlertController
  ) { }

  ngOnInit() {
    this.refreshPlayers();
  }

editar(player){
  this.router.navigate(['/tabs/addPlayer/' + player.key])
}

  doRefresh(event) {
    console.log('Begin async operation');
    this.playerService.getAll().subscribe(
      res => {
        this.players = res;

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 0);
  }
 );
}
refreshPlayers(){
  this.playerService.getAll().subscribe(
    res =>{
      this.players = res;
    }
  )
}

async presentAlert(tipo:string, texto:string) {
  const alert = await this.alertController.create({
    header: tipo,
    //subHeader: 'Subtitle',
    message: texto,
    buttons: ['OK']
  });

  await alert.present();
}
async apagar(player) {
  const alert = await this.alertController.create({
    header: 'Apagar dados',
    message: 'apagar todos os dados do player!',
    buttons: [
      {
        text: 'Não',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Sim',
        handler: () => {
          this.playerService.remove(player).then(
            res =>{
                this.presentAlert("aviso", "apagado com sucesso");
                this.refreshPlayers();
              },
              erro =>{
                this.presentAlert("erro","ao apagar  item!");
              }
          )
        }
      }
    ]
  });

  await alert.present();
}
}