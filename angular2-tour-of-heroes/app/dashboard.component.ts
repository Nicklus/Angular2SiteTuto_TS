// Importe le Component decorator et l'interface OnInit
import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  // Sans ce paramètre l'Url du template serait 'app/dashboard.component.html'
  // Permet que templateUrl soit relatif par rapport au composant
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void { 
    // Tableau de paramètres du lien
    let link = ['/detail', hero.id];
    //Envoie du tableau à la méthode navigate
    this.router.navigate(link);
  }
}


