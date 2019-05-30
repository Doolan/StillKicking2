import { NgModule } from '@angular/core';

import { StillKickingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [StillKickingSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [StillKickingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StillKickingSharedCommonModule {}
