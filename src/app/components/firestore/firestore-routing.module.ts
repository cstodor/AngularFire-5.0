import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Components
import { AuthComponent } from "./auth/auth.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { SingleComponent } from "./single/single.component";

const firestoreRoutes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'list', component: ListComponent },
  { path: 'single', component: SingleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(firestoreRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class FirestoreRoutingModule { }
