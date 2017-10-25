import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { AngularUniversalService } from "./angular-universal.service";

// Modules
import { AngularUniversalRoutingModule } from "./angular-universal-routing.module";

// Components
import { AngularUniversalComponent } from './angular-universal.component';


@NgModule({
  imports: [
    CommonModule,
    AngularUniversalRoutingModule
  ],
  declarations: [
    AngularUniversalComponent
  ],
  providers: [AngularUniversalService]
})
export class AngularUniversalModule { }
