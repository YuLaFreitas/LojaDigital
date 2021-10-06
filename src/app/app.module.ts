import { ConnService } from './home/conn.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { LoginComponent } from './login/login.component';

import { GaleriaComponent } from './galeria/galeria.component';
import { MenuComponent } from './menu/menu.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarComponent } from './editar/editar.component';
import { NovaPessoaComponent } from './nova-pessoa/nova-pessoa.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,  
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    GaleriaComponent,
    MenuComponent,
    FootComponent,
    HomeComponent,
    NovaPessoaComponent,
    EditarComponent
  ],
  providers: [ConnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
