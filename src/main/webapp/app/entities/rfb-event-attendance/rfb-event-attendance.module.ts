import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrewsSharedModule } from '../../shared';
import {
    RfbEventAttendanceService,
    RfbEventAttendancePopupService,
    RfbEventAttendanceComponent,
    RfbEventAttendanceDetailComponent,
    RfbEventAttendanceDialogComponent,
    RfbEventAttendancePopupComponent,
    RfbEventAttendanceDeletePopupComponent,
    RfbEventAttendanceDeleteDialogComponent,
    rfbEventAttendanceRoute,
    rfbEventAttendancePopupRoute,
} from './';

const ENTITY_STATES = [
    ...rfbEventAttendanceRoute,
    ...rfbEventAttendancePopupRoute,
];

@NgModule({
    imports: [
        BrewsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        RfbEventAttendanceComponent,
        RfbEventAttendanceDetailComponent,
        RfbEventAttendanceDialogComponent,
        RfbEventAttendanceDeleteDialogComponent,
        RfbEventAttendancePopupComponent,
        RfbEventAttendanceDeletePopupComponent,
    ],
    entryComponents: [
        RfbEventAttendanceComponent,
        RfbEventAttendanceDialogComponent,
        RfbEventAttendancePopupComponent,
        RfbEventAttendanceDeleteDialogComponent,
        RfbEventAttendanceDeletePopupComponent,
    ],
    providers: [
        RfbEventAttendanceService,
        RfbEventAttendancePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BrewsRfbEventAttendanceModule {}
