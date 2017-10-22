import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Components
import { RealtimeDbComponent } from "./realtime-db.component";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { ListComponent } from "./list/list.component";
import { SingleComponent } from "./single/single.component";
import { QueryingListsComponent } from './querying-lists/querying-lists.component';
import { DynamicQueryingComponent } from './dynamic-querying/dynamic-querying.component';

const realtimeDBRoutes = [
  {
    path: '', component: RealtimeDbComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'auth', component: AuthComponent },
      { path: 'list', component: ListComponent },
      { path: 'single', component: SingleComponent },
      { path: 'querying-lists', component: QueryingListsComponent },
      { path: 'dynamic-querying', component: DynamicQueryingComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(realtimeDBRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RealtimeDbRoutingModule { }
