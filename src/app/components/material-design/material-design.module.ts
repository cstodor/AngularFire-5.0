import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design
import { MatSidenavModule, MatIconModule, MatButtonModule } from "@angular/material";

// Modules
import { MaterialDesignRoutingModule } from "./material-design-routing.module";

// Components
import { MaterialDesignComponent } from "./material-design.component";
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignRoutingModule,
    MatSidenavModule, 
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    MaterialDesignComponent,
    HomeComponent,
    SidebarComponent,
    ChipsComponent
  ]
})
export class MaterialDesignModule { }
