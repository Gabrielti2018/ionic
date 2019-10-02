import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'list-player', loadChildren: './pages/list-player/list-player.module#ListPlayerPageModule' },
  { path: 'perfil-player', loadChildren: './pages/perfil-player/perfil-player.module#PerfilPlayerPageModule' },
  { path: 'list-games', loadChildren: './pages/list-games/list-games.module#ListGamesPageModule' },
  //{ path: 'add-games', loadChildren: './pages/add-games/add-games.module#AddGamesPageModule' },
  { path: 'perfil-games', loadChildren: './pages/perfil-games/perfil-games.module#PerfilGamesPageModule' },
  // { path: 'add-player', loadChildren: './pages/add-player/add-player.module#AddPlayerPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}