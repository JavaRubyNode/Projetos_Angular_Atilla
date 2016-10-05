import { Component, OnInit } from '@angular/core';
import {NoteService} from "../note.service";
import {Note} from "../../model/note.model";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NoteDetailComponent} from "../note-detail/note-detail.component";

@Component({
  moduleId: module.id,
  selector: 'app-note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['note-list.component.css'],
  directives: [ROUTER_DIRECTIVES, NoteDetailComponent],
  providers: [NoteService]
})
export class NoteListComponent implements OnInit {

  notes:Array<Note> = [];

  constructor(private noteService: NoteService) {}

  onRemove(note:Note) {
    console.log('Note ' + note.titulo + ' excluído!');

    this.notes.splice(this.notes.indexOf(note), 1);
  }

  ngOnInit() {
    this.noteService.findAll().subscribe(
      (notes) => {
        console.log(notes);
        this.notes = notes;
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
