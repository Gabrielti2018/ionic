import { Component, OnInit } from '@angular/core';
import { Games } from '../../model/games';
import { GamesService } from '../../services/games.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.page.html',
  styleUrls: ['./add-games.page.scss'],
})
export class AddGamesPage implements OnInit {
  protected games: Games = new Games;
  constructor(
    protected gamesService:GamesService,
    protected alertController: AlertController,
    protected router:Router
  ) { }

  ngOnInit() {
  }
  onsubmit(form){
    this.gamesService.save(this.games).then(
      res=>{
        form.reset();
        this.games=new Games;
        //console.log("Cadastrado!");
        this.presentAlert("Aviso","Cadastrado!")
        this.router.navigate(['/tabs/listGames']);
      },
      erro=>{
        console.log("Erro: " + erro);
        this.presentAlert("Erro", "Não foi possivel cadastrar")
      }
    )
  }

//alerts
  async presentAlert(tipo:string, texto:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      //subHeader: 'Subtitle',
      message: 'Sua conta foi cadastrada',
      buttons: ['OK']
    });

    await alert.present();
  }

}
