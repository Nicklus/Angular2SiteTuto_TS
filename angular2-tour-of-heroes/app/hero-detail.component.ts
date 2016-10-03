// donne au composant l'accès au core d'Angular et au décorateur Input
import { Component, Input, OnInit } from '@angular/core';
// Interface ActivatedRoute : contient les informations à propos d'une route associée à une composant chargé dans un outlet
// Interface Params : collection de paramètres
import { ActivatedRoute, Params }   from '@angular/router';
// Classe Location : service utilisé par une application pour intéragir avec une URL
import { Location }                 from '@angular/common'; 

import { Hero }                     from './hero';
import { HeroService }              from './hero.service';

// @Component decorator
@Component({
    // Permet que templateUrl soit relatif par rapport au composant
    moduleId: module.id,
    // selector name that identifies this component's element
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})

// Export de la classe pour être disponible pour d'autres composants
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }

    // Méthode appelée pour persister les changements de nom d'un héro dans le template hero-detail
    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}