import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Games } from '../model/games';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    protected fire:AngularFirestore
  ) { }
  save(games){
    return this.fire.collection("games").add({
      nome: games.nome,
      categoria: games.categoria,
      console: games.console,
      descricao: games.descricao,
      quant: games.quant,
      valor: games.valor,     
      ativo:true
    });
  }
  getAll(){
    return this.fire.collection("games").snapshotChanges()
    .pipe(
      map(dados =>
        dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
      )
    )
  }
  get(id){
    return this.fire.collection("games").doc<Games>(id).valueChanges(); 
  }
}
