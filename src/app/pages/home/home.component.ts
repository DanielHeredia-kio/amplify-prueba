import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private test: TestService) { }

  get() {
    console.log('Holi');
    this.test.greet().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
