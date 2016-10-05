import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";

import { AppComponent, environment } from './app/';
import {APP_ROUTE_CONFIG} from "./app/app.routes";
import {AuthGuard} from "./app/auth-guard";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTE_CONFIG,
  AuthGuard
]);
