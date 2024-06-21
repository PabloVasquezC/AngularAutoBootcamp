import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="decrement()" class="btn btn-warning border mx-1">-1</button>
    <button (click)="reset()" class="btn btn-terciary border mx-1">Reset</button>
    <button (click)="increment()" class="btn btn-danger border mx-1">+1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  increment(): void {
    this.counter++;
  }

  reset(): void {
    this.counter = 10;
  }

  decrement(): void {
    this.counter--;
  }
}
