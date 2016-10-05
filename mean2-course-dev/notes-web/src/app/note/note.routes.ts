import {RouterConfig} from "@angular/router";
import {NoteListComponent} from "./note-list/note-list.component";
import {NoteFormComponent} from "./note-form/note-form.component";

export const noteRoutes:RouterConfig = [
  { path: '', component: NoteListComponent },
  { path: 'new', component: NoteFormComponent },
  { path: ':id', component: NoteFormComponent }
];
