import {NgModule} from '@angular/core';
import {CookieService} from '../service/cookie.service';
import {GridStyling} from '../service/ag-grid-styling.service';
import {DateTimeService} from '../service/date-time.service';

import {GridService} from '../service/grid.service';
import {JsonDataFromEndpointservice} from '../service/http-endpoint.service';
import {LoggerService} from '../service/logger.service';
import {RestEndpointProvider} from '../service/rest-endpoint.service';

@NgModule({
    providers:[RestEndpointProvider, CookieService, DateTimeService, JsonDataFromEndpointservice, LoggerService, GridService, GridStyling]
})
export class ServicesModule{}