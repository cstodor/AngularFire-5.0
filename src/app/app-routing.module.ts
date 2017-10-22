import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Components
import { HomeComponent } from './components/home/home.component';

// Routes
const appRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'realtime-db', loadChildren: 'app/components/realtime-db/realtime-db.module#RealtimeDbModule' },
  { path: 'firestore', loadChildren: 'app/components/firestore/firestore.module#FirestoreModule' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
