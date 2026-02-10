import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div [ngStyle]="customStyle">Child Component</div>`,
  // templateUrl: './child.component.html',
 // styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() customStyle: { [key: string]: string; } | undefined;
}
