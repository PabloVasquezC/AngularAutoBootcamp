import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from "../../interfaces/character.interface";


@Component({
    selector: 'dbz-list',
    template: `
    <h4>Listado</h4>
    <ul class="list-group">
      <li *ngFor="
        let character of characterList;
        let i = index;
        let isEven = even"
        [ngClass]="{'list-group-item-info': isEven}"
        class="list-group-item d-flex justify-content-between align-items-center">

        <div>
          <span class="text-primary">{{ i + 1 }}.</span>
          {{ character.name }} -

          <strong>Power:</strong>

          <span>{{ character.power }}</span>
        </div>

        <button class="btn btn-danger" (click)="onDeleteCharacter( character.id )">X</button>
      </li>
    </ul>
    `,
    styles: ``
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    { name: 'Trunk', power: 10 },


  ];

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  public character : Character = {
    name: '',
    power: 0
  }


  onDeleteCharacter( id?: string): void {
    if ( !id ) return;

    this.onDelete.emit( id );
  }
}
