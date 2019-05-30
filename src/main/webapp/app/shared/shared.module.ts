import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StillKickingSharedLibsModule, StillKickingSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [StillKickingSharedLibsModule, StillKickingSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [StillKickingSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StillKickingSharedModule {
  static forRoot() {
    return {
      ngModule: StillKickingSharedModule
    };
  }
}
