import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'listPlayer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-player/list-player.module').then(m => m.ListPlayerPageModule)
          }
        ]
      },
      {
        path: 'perfilPlayer/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-player/perfil-player.module').then(m => m.PerfilPlayerPageModule)
          }
        ]
      },
      {
        path: 'perfilGames/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/perfil-games/perfil-games.module').then(m => m.PerfilGamesPageModule)
          }
        ]
      },
      {
        path: 'listGames',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list-games/list-games.module').then(m => m.ListGamesPageModule)
          }
        ]
      },
     
      {
        path: 'addGames',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-games/add-games.module').then(m => m.AddGamesPageModule)
          }
        ]
      },
      {
        path: 'addPlayer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-player/add-player.module').then(m => m.AddPlayerPageModule)
          }
        ]
      },
      {
        path: 'addPlayer/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-player/add-player.module').then(m => m.AddPlayerPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
