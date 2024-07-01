import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  template: `
  <div class="bg-dark border-right p-3" id="sidebar">
    <h3 class="text-light">GifsApp</h3>
    <hr class="text-white">

    <div class="list-group list-reset">
      <button class="list-group-item list-group-item-action">
        Valorant
      </button>
    </div>
  </div>
  `,
  styleUrl: 'sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent { }
