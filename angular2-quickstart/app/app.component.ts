// component minimum requis => le root component

// donne au composant l'accès au core d'Angular @Component
import { Component } from '@angular/core';

// decorator @Component associant metadata avec la classe composant AppComponent
@Component({
    // sélecteur CSS pour élément HTML représentant le composant
    selector: 'my-app',
    template: '<h1>Ma DEUXIEME appli Angular 2'
})

// export pour import dans l'application
export class AppComponent { }