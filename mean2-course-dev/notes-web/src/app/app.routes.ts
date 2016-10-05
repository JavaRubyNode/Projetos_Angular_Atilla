import {RouterConfig, provideRouter} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NovaContaComponent} from "./nova-conta/nova-conta.component";
import {NoteComponent} from "./note/note.component";
import {noteRoutes} from "./note/note.routes";
import {AuthGuard} from "./auth-guard";

export const routes:RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'nova-conta', component: NovaContaComponent },
  { path: 'note', component: NoteComponent,
    children: noteRoutes, canActivate: [AuthGuard] }
];

export const APP_ROUTE_CONFIG = [
  provideRouter(routes)
];
