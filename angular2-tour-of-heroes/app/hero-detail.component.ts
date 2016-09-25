// donne au composant l'accès au core d'Angular et au décorateur Input
import { Component, Input } from '@angular/core'; 

import { Hero } from './hero';

// @Component decorator
@Component({
    // selector name that identifies this component's element
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}}</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
    `
})

// Export de la classe pour être disponible pour d'autres composants
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}