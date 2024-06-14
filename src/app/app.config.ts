import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {EventBus} from "@app/app.event.bus";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        EventBus,
        HttpClient,
    ]
};
