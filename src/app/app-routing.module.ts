import { EditarComponent } from './editar/editar.component';
import { NovaPessoaComponent } from './nova-pessoa/nova-pessoa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'new', component: NovaPessoaComponent},
  {path: 'editar/:id', component: NovaPessoaComponent}
  
];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
}
