import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../services/player.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})
export class AddPlayerPage implements OnInit {
  protected player: Player = new Player;
  protected id:any = null;

  constructor(
    protected playerService:PlayerService,
    protected alertController: AlertController,
    protected activetedRoute:ActivatedRoute,
    protected router:Router
  ) { }

  ngOnInit() {
    this.id= this.activetedRoute.snapshot.paramMap.get("id");
    if(this.id){
      this.playerService.get(this.id).subscribe(
        res=>{
          this.player = res
        },
        erro => this.id = null
      )
    }
  }
  onsubmit(form){
    if(!this.id){
      this.playerService.save(this.player).then(
        res=>{
          form.reset();
          this.player=new Player;
          //console.log("Cadastrado!");
          this.presentAlert("Aviso","Cadastrado!")
          this.router.navigate(['/tabs/listPlayer']);
        },
        erro=>{
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Não foi possivel cadastrar")
        }
      )
    }else{
      this.playerService.update(this.player, this.id).then(
        res=>{
          form.reset();
          this.player=new Player;
          //console.log("Cadastrado!");
          this.presentAlert("Aviso","Atualizado!")
          this.router.navigate(['/tabs/listPlayer']);
        },
        erro=>{
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Não foi possivel atualizar")
        }
      )
    }
    this.playerService.save(this.player).then(
      res=>{
        form.reset();
        this.player=new Player;
        //console.log("Cadastrado!");
        this.presentAlert("Aviso","Cadastrado!")
        this.router.navigate(['/tabs/listPlayer']);
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
