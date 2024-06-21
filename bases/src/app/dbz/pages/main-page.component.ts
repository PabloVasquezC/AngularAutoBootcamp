import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  template: `
  <h1>DBZ Personajes</h1>
  <hr>

  <div class="row">

    <div class="col">

      <app-dbz-list [characterList]="characters"></app-dbz-list>


    </div>

    <div class="col">
      <app-dbz-add-character></app-dbz-add-character>
    </div>

  </div>
  `
})

export class MainPageComponent  {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }
  ];
}
