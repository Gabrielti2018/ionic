import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  protected quantPlayer:number = 0;
  protected quantGames:number = 0;

  constructor(
    protected playerService: PlayerService,
    protected gamesService: GamesService,
  ) {
    this.playerService.getAll().subscribe(
      res=>{
        this.quantPlayer = res.length
      }
    ),
    this.gamesService.getAll().subscribe(
      res=>{
        this.quantGames = res.length
      }
    )
  }

}
