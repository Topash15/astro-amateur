import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  model = new User("Name", "Email", "Password");

  public submitted: boolean = false;

  showFormControls(form: any){
    return form && form.controls.name
  }
}

class User {
  constructor(
    public username: string,
    public email: string,
    public password: string
  ) {}
}
