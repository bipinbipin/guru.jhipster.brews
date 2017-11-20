import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrewsRfbLocationModule } from './rfb-location/rfb-location.module';
import { BrewsRfbEventModule } from './rfb-event/rfb-event.module';
import { BrewsRfbEventAttendanceModule } from './rfb-event-attendance/rfb-event-attendance.module';
import { BrewsRfbUserModule } from './rfb-user/rfb-user.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BrewsRfbLocationModule,
        BrewsRfbEventModule,
        BrewsRfbEventAttendanceModule,
        BrewsRfbUserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BrewsEntityModule {}
