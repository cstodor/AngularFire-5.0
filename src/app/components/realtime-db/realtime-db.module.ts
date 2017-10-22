import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Routing
import { RealtimeDbRoutingModule } from "./realtime-db-routing.module";

// Services
import { RealtimeDbService } from "./realtime-db.service";

// Components
import { RealtimeDbComponent } from "./realtime-db.component";
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { QueryingListsComponent } from './querying-lists/querying-lists.component';
import { DynamicQueryingComponent } from './dynamic-querying/dynamic-querying.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RealtimeDbRoutingModule
  ],
  declarations: [
    RealtimeDbComponent,
    AuthComponent,
    HomeComponent,
    ListComponent,
    SingleComponent,
    SidebarComponent,
    QueryingListsComponent,
    DynamicQueryingComponent
  ],
  providers: [RealtimeDbService]
})
export class RealtimeDbModule { }
