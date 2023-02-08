import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'ads-ui/loader';
import { DIRECTIVES } from './stencil-generated';

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return defineCustomElements();
      },
    },
  ],
})
export class AdsUiAngularModule {}
