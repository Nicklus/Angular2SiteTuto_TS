// module minimum requis => le root module
// point d'entrée de l'application
import { NgModule }         from '@angular/core';
// import de BrowserModule car application web
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';

@NgModule({
    imports:        [ BrowserModule ],
    declarations:   [ AppComponent ],
    bootstrap:      [ AppComponent ]
})

export class AppModule { }