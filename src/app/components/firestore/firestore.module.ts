import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { FirestoreRoutingModule } from "./firestore-routing.module";

// Components
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  imports: [
    CommonModule,
    FirestoreRoutingModule
  ],
  declarations: [
    AuthComponent,
    HomeComponent,
    ListComponent,
    SingleComponent
  ]
})
export class FirestoreModule { }
