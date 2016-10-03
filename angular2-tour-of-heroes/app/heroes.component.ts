import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  // Permet que templateUrl soit relatif par rapport au composant
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { 
    
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // set la propriété selectedHero par rapport au héro "cliqué"
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    // Création du nouveau héro par HeroService
    this.heroService.create(name)
      .then(hero => {
        // Ajout du héro nouvellement créé dans le tableau des héros
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }
}
