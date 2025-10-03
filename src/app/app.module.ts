import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { BoletosCinepolisComponent } from './formularios/Cinepolis/boletos-cinepolis/boletos-cinepolis.component';
import { ResistenciasComponent } from './formularios/resistencias/resistencias.component';
import { PracticaExtraComponent } from './formularios/practica-extra/practica-extra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFilterPipe,
    OperasBasComponent,
    BoletosCinepolisComponent,
    ResistenciasComponent,
    PracticaExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
