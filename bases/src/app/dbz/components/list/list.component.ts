import { Component, Input } from "@angular/core";
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
        class="list-group-item">
        <span class="text-primary">{{ i + 1 }}.</span>
        {{ character.name }} - <strong>Power:</strong> {{ character.power }}
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
}
