import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";
import {Note} from "../model/note.model";

export const NOTES_ENDPOINT
  = 'http://localhost:3000/notes/';

@Injectable()
export class NoteService {

  constructor(private http:Http) {}

  findAll():Observable<any> {
    return this.http.get(NOTES_ENDPOINT + 'all',
        { headers: NoteService.getHeaders() })
      .map(response => response.json())
      .catch(err => Observable.throw(err.json()));
  }

  findById(_id:string) {
    return this.http.get(NOTES_ENDPOINT + 'by-id/'+_id,
      { headers: NoteService.getHeaders() })
      .map(response => response.json())
      .catch(err => Observable.throw(err.json()));
  }

  create(note:Note) {
    let body = JSON.stringify(note);

    return this.http.post(
        NOTES_ENDPOINT + 'create',
        body,
        { headers: NoteService.getHeaders() })
      .map(response => response.json())
      .catch(err => Observable.throw(err.json()));
  }

  update(note:Note) {
    let body = JSON.stringify(note);

    return this.http.put(
      NOTES_ENDPOINT + 'update',
      body,
      { headers: NoteService.getHeaders() })
      .map(response => response.json())
      .catch(err => Observable.throw(err.json()));
  }

  remove(_id:string) {
    return this.http.delete(NOTES_ENDPOINT + 'delete/'+_id,
      { headers: NoteService.getHeaders() })
      .map(response => response.json())
      .catch(err => Observable.throw(err.json()));
  }

  static getHeaders():any {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('X-Auth-Token', localStorage.getItem('X-Auth-Token'));

    return headers;
  }
}
