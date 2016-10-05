import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-nova-conta',
  templateUrl: 'nova-conta.component.html',
  styleUrls: ['nova-conta.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NovaContaComponent implements OnInit {

  email:string;
  senha:string;
  confirmSenha:string;

  constructor(private router:Router) {}

  criarConta():void {
    if (this.senha === this.confirmSenha) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
        .then((user) => {
          user.getToken().then(
            (token) => {
              localStorage.setItem('X-Auth-Token', token)
              this.router.navigate(['note']);
            });
        }).catch((err) => {
          console.error(err);
        });
    } else {
      console.error('Senhas não conferem.')
    }
  }

  ngOnInit() {
  }

}
