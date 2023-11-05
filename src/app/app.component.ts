import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName: new FormControl('Beni'),
    password: new FormControl('123'),
    confirmPassword: new FormControl('123'),
    address: new FormGroup({
    City: new FormControl(''),
    State: new FormControl('')
  })
})
  


LoasApiData() {
  this.registrationForm.setValue({
    userName: 'Beni the king',
    password: '123',
    confirmPassword: '123',
    address: {
      City: 'Kartahana',
      State: 'Mexico'
    }
  })
}
}