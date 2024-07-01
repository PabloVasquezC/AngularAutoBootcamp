import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="d-flex">

    <!-- SideBar -->
    <shared-sidebar></shared-sidebar>

    <!-- HomePage -->
    <gifs-home-page class="flex-fill"></gifs-home-page>
    </div>
  `,
  styles: ``
})
export class AppComponent {
  title = 'gifs-app';
}
