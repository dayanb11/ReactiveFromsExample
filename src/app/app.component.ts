import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    UserName: new FormControl('Beni'),
    Password: new FormControl('123'),
    ConfirmPassword: new FormControl('123'),
    address: new FormGroup({
      City: new FormControl('kartahana'),
      State: new FormControl('Mexico')
    })
  })



  LoadApiData() {
    this.registrationForm.setValue({
      UserName: 'Beni the king',
      Password: '123',
      ConfirmPassword: '123',
      address: {
        City: 'Kartahana',
        State: 'Mexico'
      }
    })
  }
}