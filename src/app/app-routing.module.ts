import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'fusca1',
    loadChildren: () => import('./fusca1/fusca1.module').then( m => m.Fusca1PageModule)
  },
  {
    path: 'fusca2',
    loadChildren: () => import('./fusca2/fusca2.module').then( m => m.Fusca2PageModule)
  },
  {
    path: 'fusca3',
    loadChildren: () => import('./fusca3/fusca3.module').then( m => m.Fusca3PageModule)
  },
  {
    path: 'fusca4',
    loadChildren: () => import('./fusca4/fusca4.module').then( m => m.Fusca4PageModule)
  },
  {
    path: 'fusca5',
    loadChildren: () => import('./fusca5/fusca5.module').then( m => m.Fusca5PageModule)
  },
  {
    path: 'fusca6',
    loadChildren: () => import('./fusca6/fusca6.module').then( m => m.Fusca6PageModule)
  },
  {
    path: 'fusca7',
    loadChildren: () => import('./fusca7/fusca7.module').then( m => m.Fusca7PageModule)
  },
  {
    path: 'fusca8',
    loadChildren: () => import('./fusca8/fusca8.module').then( m => m.Fusca8PageModule)
  },
  {
    path: 'fusca9',
    loadChildren: () => import('./fusca9/fusca9.module').then( m => m.Fusca9PageModule)
  },
  {
    path: 'fotos',
    loadChildren: () => import('./fotos/fotos.module').then( m => m.FotosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'confirmar-compra',
    loadChildren: () => import('./confirmar-compra/confirmar-compra.module').then( m => m.ConfirmarCompraPageModule)
  },
  {
    path: 'cadastrar-veiculo',
    loadChildren: () => import('./cadastrar-veiculo/cadastrar-veiculo.module').then( m => m.CadastrarVeiculoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
