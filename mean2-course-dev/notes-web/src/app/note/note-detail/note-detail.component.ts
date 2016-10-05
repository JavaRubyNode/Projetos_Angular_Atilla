import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Note} from "../../model/note.model";
import {NoteService} from "../note.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-note-detail',
  templateUrl: 'note-detail.component.html',
  styleUrls: ['note-detail.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [NoteService]
})
export class NoteDetailComponent implements OnInit {

  @Input() note:Note;
  @Output() remove:EventEmitter<Note>
    = new EventEmitter<Note>();

  constructor(private noteService:NoteService) {}

  excluir() {
    this.noteService.remove(this.note._id).subscribe(
      () => this.remove.emit(this.note),
      (err) => console.error(err)
    );
  }

  ngOnInit() {
  }
}
