import { Component, OnInit } from '@angular/core';
// Import Hero class
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Add a hero property
  //hero = 'Windstorm';

  // Refactor the component's hero property to be of type Hero. Initialize it with an id of 1 and the name Windstorm.
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
