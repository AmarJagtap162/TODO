import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
    template: `<app-child [customStyle]="{color: 'blue'}"></app-child>`,
  //templateUrl: './parent.component.html',
 // styleUrls: ['./parent.component.css']
})
export class ParentComponent {
parentMessage = 'Hello from Parent!';
}
