import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  template: `
  <div class="row p-3">
    <div class="col-12">
      <gifs-search-box></gifs-search-box>
    </div>

    <div class="col-12 pt-2">
      <gifs-card-list></gifs-card-list>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

}
