import { Component, Input } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    selector: 'app-dbz-list',
    // imports: [
    //     CommonModule,
    // ],
    template: `
    <h4>Listado</h4>
    <ul class="list-group">
      <li *ngFor="let character of characterList"
        class="list-group-item">
        <span>{{ character.name }} - </span>
        <strong>Power: </strong>
        <span>{{ character.power }}</span>
      </li>
  </ul>
    `,
    styles: `
    `,
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]
}
