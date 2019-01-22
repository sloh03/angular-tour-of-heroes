import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Import Hero class
import { HeroService } from '../hero.service'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // Rename the component's hero property to selectedHero but don't assign it. There is no selected hero when the application starts
  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // Add the following onSelect() method, which assigns the clicked hero from the template to the component's selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }  

}
