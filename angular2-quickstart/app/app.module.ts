// module minimum requis => le root module
// point d'entrée de l'application
import { NgModule }         from '@angular/core';
// import de BrowserModule car application web
import { BrowserModule }    from '@angular/platform-browser';

import { FormsModule }      from '@angular/forms';

import { AppComponent }     from './app.component';

import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
    // contient la liste des modules externes utilisés par l'application
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    bootstrap:      [ AppComponent ]
})

export class AppModule { }