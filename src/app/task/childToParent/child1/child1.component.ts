import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `<button (click)="onClick()">Click me</button>`,
  //  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
