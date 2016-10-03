// module minimum requis => le root module
// point d'entrée de l'application
import { NgModule }             from '@angular/core';
// import de BrowserModule car application web
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
// import du module HttpModule fournissant un ensemble de services HTTP
import { HttpModule }           from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';

import './rxjs-extensions';

import { routing }              from './app.routing';

@NgModule({
  // contient la liste des modules externes utilisés par l'application
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  // teach the injector how to make a HeroService by registering a HeroService provider
  // tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
