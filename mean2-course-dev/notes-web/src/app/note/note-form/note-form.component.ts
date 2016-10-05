import { Component, OnInit } from '@angular/core';
import {NoteService} from "../note.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Note} from "../../model/note.model";

@Component({
  moduleId: module.id,
  selector: 'app-note-form',
  templateUrl: 'note-form.component.html',
  styleUrls: ['note-form.component.css'],
  providers: [NoteService]
})
export class NoteFormComponent implements OnInit {

  note:Note = new Note();

  constructor(private noteService:NoteService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];

      if (id) {
        console.log(id);
        this.noteService.findById(id).subscribe(
          (result) => {
            this.note = result;
            console.log('Note found ' + result.titulo);
          },
          (err) => console.error(err)
        );
      } else {
        this.note = new Note();
      }
    });
  }

  excluir() {
    this.noteService.remove(this.note._id).subscribe(
      () => {
        console.log(this.note.titulo + ' excluído');
        this.router.navigate(['note']);
      },
      (err) => console.error(err)
    );
  }

  salvar() {
    if (this.note._id) {
      this.noteService.update(this.note).subscribe(
        () => this.router.navigate(['note']),
        (err) => console.error(err)
      );
    } else {
      this.noteService.create(this.note).subscribe(
        () => {
          console.log(this.note.titulo + ' salvo com sucesso!');
          this.note = new Note();
        },
        (err) => console.error(err)
      );
    }
  }
}
