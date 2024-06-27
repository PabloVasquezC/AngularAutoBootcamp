import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  template: `
  <h1>DBZ Personajes</h1>
  <hr>

  <div class="row">

    <div class="col">
      <dbz-list [characterList]="characters"
                (onDelete)="onDeleteCharacter($event)"></dbz-list>
    </div>

    <div class="col">
      <dbz-add-character (onNewCharacter)="onNewCharacter($event)"></dbz-add-character>
    </div>

  </div>
  `
})
export class MainPageComponent  {

  constructor ( private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character:Character ):void {
    this.dbzService.addCharacter(character);
  }

}
