import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Returns an observable of mock heroes (Observable<Hero[]>)
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// Registers HeroService as the provider of its service at the root level so that it can be injected anywhere in the app
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}