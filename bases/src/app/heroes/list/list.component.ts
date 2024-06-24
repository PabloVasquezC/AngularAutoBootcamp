import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  template: `
  <h3>Listado de Héroes</h3>

<div *ngIf="deletedHero; else nothingWasDeleted">
  <h3>Heroe Borrado <small class="text-danger">: {{ deletedHero }} </small></h3>
</div>


<ng-template #nothingWasDeleted>
  <h3>No ha borrado nada.</h3>
</ng-template>

<button
  *ngIf="heroNames.length > 0"
  class="btn btn-outline-danger"
  (click)="removeLastHero()">
  Borrar último héroe
</button>

<ul class="mt-2 list-group">
  <li *ngFor="let name of heroNames"
      class="list-group-item">
      {{ name }}
  </li>

</ul>

  `,
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk']
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
