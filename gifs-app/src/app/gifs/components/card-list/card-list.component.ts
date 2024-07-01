import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  template: `
  <div class="row">

    <div class="col-md-3 col-sm-6">

      <div class="card mb-2 text-center bg-dark">
        <div class="card-body text-white">
          <p class="card-text">Hola Mundo</p>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent { }
