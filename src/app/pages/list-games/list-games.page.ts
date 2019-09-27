import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.page.html',
  styleUrls: ['./list-games.page.scss'],
})
export class ListGamesPage implements OnInit {
  protected games: any;

  constructor(
    protected gamesService:GamesService
  ) { }

  ngOnInit() {
    this.gamesService.getAll().subscribe(
      res=>{
        this.games = res;
      }
    )
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.gamesService.getAll().subscribe(
      res => {
        this.games = res;

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 0);
  }
 );
}

}
