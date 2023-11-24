import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  LoadApi():void
{  alert('LoadApi');}
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,address:FormGroup) {
    this.registrationForm = new FormGroup({
      UserName: new FormControl('Beni the king'),
      Password: new FormControl('123'),
      ConfirmPassword: new FormControl('123')
    }),
      address = new FormGroup({
        City: new FormControl('Los angeles'),
        State: new FormControl('California')
      })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
