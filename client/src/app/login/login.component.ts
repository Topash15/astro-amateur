import { Component, OnInit } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public signedIn: boolean = false;
  model = new User("Name", "Password");

  showFormControls(form: any){
    return form && form.controls.name
  }

  onSubmit(form:any):void{

    // hash password here
    const hash:string = form.controls.password.value;

    this.model=new User(
      form.controls.username.value,
      hash
    )

    console.log(this.model);
    this.signedIn = true;
  }

  constructor() {}

  ngOnInit(): void {}
}

