import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-note',
  templateUrl: 'note.component.html',
  styleUrls: ['note.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NoteComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
