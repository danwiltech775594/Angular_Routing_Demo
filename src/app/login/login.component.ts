import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../Services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  login(username: any, password: any) {
  console.log(username, password);
  const user = this.userService.findUserByCredentials(username,password)
  if(username != null) {
    this.router.navigate(['/profile', user?._id]);
    }
  }
}
