import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  template: `
  <h1>DBZ Personajes</h1>
  <hr>

  <div class="row">

    <div class="col">
      <dbz-list [characterList]="characters"></dbz-list>
    </div>

    <div class="col">
      <dbz-add-character (onNewCharacter)="onNewCharacter($event)"></dbz-add-character>
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
  }];


  onNewCharacter( character : Character):void {
      console.log("MainPgae")
      console.log(character)

  }

}
