// module minimum requis => le root module
// point d'entrée de l'application
import { NgModule }             from '@angular/core';
// import de BrowserModule car application web
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { routing }              from './app.routing';
import { DashboardComponent }   from './dashboard.component';

@NgModule({
  // contient la liste des modules externes utilisés par l'application
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
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
