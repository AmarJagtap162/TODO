import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcoome',
  templateUrl: './welcoome.component.html',
  styleUrls: ['./welcoome.component.css']
})
export class WelcoomeComponent {
  name = ''
  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name'])
  }
}
