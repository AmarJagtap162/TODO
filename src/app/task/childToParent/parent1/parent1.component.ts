import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  template: `<app-child (buttonClick)="handleButtonClick()"></app-child>`,
  //  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  handleButtonClick() {
    console.log('Button clicked in child component!');
  }
}
