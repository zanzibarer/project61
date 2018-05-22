import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesComponent } from './ui-features.component';

@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    UiFeaturesComponent,
  ]
})
export class UiFeaturesModule { }