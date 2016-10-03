// Service Hero fournissant les héros

// import the Angular Injectable function
import { Injectable }     from '@angular/core';

import { Hero }           from './hero';
import { HEROES }         from './mock-heroes';

import { Headers, Http, Response }  from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Rx';

// @Injectable() decorator => emits metadata about our service
@Injectable()
export class HeroService {

  // URL to web api
  private heroesUrl = 'app/heroes';
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) { };

  // log l'erreur dans la console
  // Retourne une promesse rejetée en cas d'erreur
  private handleError(error: any): Promise<any> {
    console.log("Error !!", error);
    return Promise.reject(error.message || error);
  }

  // Avec Web Service
  getHeroes(): Promise<Hero[]> {
    // http.get() return RxJS Observable
    return this.http
      .get(this.heroesUrl)
      // Convert Observable to Promise
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
      
  }

  // Sans Web service
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  getHeroesSlowly(): Promise<Hero[]> {
      return new Promise<Hero[]>(resolve =>
          setTimeout(resolve, 2000) // delay 2 seconds
      )
      .then(() => this.getHeroes());
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  update(hero: Hero): Promise<Hero> {
    // Encoding the hero id in the URL
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    // Encoding the hero id in the URL
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
