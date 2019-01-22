import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Import Hero class
import { HEROES } from '../mock-heroes'; // Import the mock HEROES - Displays the list of heroes at the top of the HeroesComponent

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // In the same file (HeroesComponent class), define a component property called heroes to expose HEROES array for binding
  heroes = HEROES;

  // Rename the component's hero property to selectedHero but don't assign it. There is no selected hero when the application starts
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // Add the following onSelect() method, which assigns the clicked hero from the template to the component's selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

