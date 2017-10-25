import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Components
import { AngularUniversalComponent } from "./angular-universal.component";
const angularUniversalRoutes = [
  {
    path: '', component: AngularUniversalComponent, children: [
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(angularUniversalRoutes)
  ],
  declarations: []
})
export class AngularUniversalRoutingModule { }
