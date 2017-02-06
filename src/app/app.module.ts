import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokeInfoComponent } from './pokeinfo.component';

import { PokeInfoModule } from './pokeinfo.module';

import { PokemonInfoService } from './pokemoninfo.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FilterPipe} from './filterpipe'

@NgModule({
  
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    PokeInfoModule,
    RouterModule.forRoot([
      {
        path:'list',
        component: PokeInfoComponent
      }
    ]),
    
    
  ],
  declarations: [
    AppComponent,
    PokeInfoComponent
  ],
  providers: [PokemonInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
