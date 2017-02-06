import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PokeInfoComponent } from './pokeinfo.component';

import {FilterPipe} from './filterpipe'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
  ],
  exports:[],
  providers: [],
  bootstrap: [PokeInfoComponent]
})
export class PokeInfoModule { }
