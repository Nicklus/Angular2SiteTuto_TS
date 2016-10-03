import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';

import { HeroSearchService }    from './hero-search.service';
import { Hero }                 from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    // Subject : producer of an observable event stream
    // searchTerms : produces an Observable of strings, the filter criteria for the name search
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) { }

    // Push a search term into the observable stream
    search(term: string): void {
        // Each call to search puts a new string into this subject's observable stream by calling next
        this.searchTerms.next(term);
    }

    ngOnInit(): void { 
        // turn the stream of search terms into a stream of Hero arrays and assign the result to the heroes property
        this.heroes = this.searchTerms
            // waits until the flow of new string events pauses for 300 milliseconds before passing along the latest string. We'll never make requests more frequently than 300ms
            .debounceTime(300) // wait for 300ms pause in events
            // ensures that we only send a request if the filter text changed
            .distinctUntilChanged() // ignore if next search term is same as previous
            // switch to new observable each time
            // cancels and discards previous search observables, returning only the latest search service observable
            .switchMap(term => term 
                // return the http search observable
                ? this.heroSearchService.search(term) 
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([]))
            // intercepts a failed observable    
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}