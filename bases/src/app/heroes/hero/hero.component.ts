import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  template: `
  <h1>{{ name }}</h1>


<dl>
  <td>Nombre: </td>
  <dd>{{ name }}</dd>

  <td>Edad: </td>
  <dd>{{ age }}</dd>

  <td>Metodo: </td>
  <dd>{{ getHeroDescription() }}</dd>

  <td>Capitalizado: </td>
  <dd>{{ capitalizaedName }}</dd>

</dl>

<button
  *ngIf="name !== 'spiderman'"
  (click)="changeName()"
  class="btn btn-primary mx-2">
  Cambiar nombre
</button>

<button
  *ngIf="age !== 28"
  (click)="changeAge()"
  class="btn btn-primary ">
  Cambiar Edad
</button>

<button
  (click)="resetForm()"
  class="btn btn-primary mx-2">
  Reset
</button>

  `,
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizaedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }

  changeName(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 28;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
