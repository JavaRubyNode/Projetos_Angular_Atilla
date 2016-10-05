import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) {}

  logout():void {
    firebase.auth().signOut().then(
      () => this.router.navigate(['login'])
    );
  }

  isLogado():boolean {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
