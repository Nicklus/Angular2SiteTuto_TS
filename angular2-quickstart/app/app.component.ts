// component minimum requis => le root component

// donne au composant l'accès au core d'Angular @Component
import { Component } from '@angular/core';

// classe Hero
export class Hero {
    id: number;
    name: string;
}

// decorator @Component associant metadata avec la classe composant AppComponent
@Component({
    // sélecteur CSS pour élément HTML représentant le composant
    selector: 'my-app',
    // {{}} = one-way data binding
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id : </label>{{hero.id}}</div>
        <div>
            <label>name : </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
        `
})

// component class : contrôle l'apparence et le comportement d'une vue au travers de son template
export class AppComponent { 
    title = 'Tour of Heroes';
    // propriété "hero" du component de type "Hero"
    hero: Hero = {
        id: 1,
        name: 'windstorm'
    };
}