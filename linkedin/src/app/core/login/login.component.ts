import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsersService } from 'src/app/_services/users.service';
import { Error } from 'src/app/_services/errors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  getError(name) {
    const errorrr = this.myerrors.MyError.filter(function (e) {
      return e.name === name
    });
    return errorrr[0].message
  }

  constructor(
    private router: Router,
    public userService: UsersService,
    public myerrors: Error,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const { email, password } = form.value;

    let auth = false;
    this.userService.User.forEach(e => {
      // console.log(e.email, e.password)
      if (e.email == email && e.password == password) {
        auth = true;
      }
    });

    if (!auth) {
      console.log("You are not authorized");
    }
    else {
      console.log("Authorized");
      this.router.navigate(['/home']);
    }
  }

}




