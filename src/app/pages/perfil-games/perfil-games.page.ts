import { Component, OnInit } from '@angular/core';
import { Games } from '../../model/games';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-games',
  templateUrl: './perfil-games.page.html',
  styleUrls: ['./perfil-games.page.scss'],
})
export class PerfilGamesPage implements OnInit {

  protected games:Games = new Games;
  private id:string = null;
  constructor(
    protected playerService: GamesService,
    protected activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id){
      this.playerService.get(this.id).subscribe(
        res=>{
          this.games = res
        }
      )
    }
   }

}
