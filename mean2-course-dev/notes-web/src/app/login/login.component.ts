import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  email:string;
  senha:string;

  constructor(private router:Router) {}

  login():void {
    firebase.auth().signInWithEmailAndPassword(this.email, this.senha)
      .then((user) => {
        user.getToken().then(
          (token) => {
            localStorage.setItem('X-Auth-Token', token)
            this.router.navigate(['note']);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  ngOnInit() {
  }

}
