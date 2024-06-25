import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-add-character',
    template: `
      <h4>Agregar Personaje</h4>

      <form class="row" (ngSubmit)="emitCharacter()">

        <input
          type="text"
          [(ngModel)]="character.name"
          name="name"
          class="form-control mb-2"
          placeholder="Nombre">

        <input
          type="number"
          [(ngModel)]="character.power"
          name="power"
          class="form-control mb-2"
          placeholder="Poder">

        <button type="submit" class="btn btn-primary" (click)="emitCharacter()">
          Agregar
        </button>

        <pre>{{ character | json}}</pre>

      </form>
    `,
    styles: `

    `,
})
export class AddCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {


    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
