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
  },
  {
    path: 'detalhes-veiculo',
    loadChildren: () => import('./detalhes-veiculo/detalhes-veiculo.module').then( m => m.DetalhesVeiculoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
