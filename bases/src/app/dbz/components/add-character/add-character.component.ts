import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dbz-add-character',

    // imports: [
    //     CommonModule,
    // ],
    template: `
      <h4>Agregar Personaje</h4>
      <form class="row">
        <input type="text" class="form-control mb-2" placeholder="Nombre">
        <input type="number" class="form-control mb-2" placeholder="Poder">
        <button type="submit" class="btn btn-primary">
          Agregar
        </button>
      </form>
    `,
    styles: `

    `,
})
export class AddCharacterComponent { }
