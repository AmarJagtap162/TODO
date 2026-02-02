import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcoome',
  templateUrl: './welcoome.component.html',
  styleUrls: ['./welcoome.component.css']
})
export class WelcoomeComponent {
  name = ''
  welcomeMessageFromService: string = ''
  errorMessage: string = ''
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) {
    this.name = this.route.snapshot.params['name']
    console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMessage() {
    //  console.log("get welcome message")
    //  console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: err => this.handleErrorResponse(err)
    });
  }

  handleErrorResponse(error: any) {
    console.log(error.message);
    this.errorMessage = error.message;
  }

  handleSuccessfulResponse(response: any) {
    // console.log(response.message);
    this.welcomeMessageFromService = response.message
  }

  getwelcomeMessageWithPathVariable() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: err => this.handleErrorResponse(err)
    });
  }
}
