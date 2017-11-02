import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Components
import { MaterialDesignComponent } from "./material-design.component";
import { HomeComponent } from "./home/home.component";
import { ChipsComponent } from "./chips/chips.component";

const mdRoutes = [
  {
    path: '', component: MaterialDesignComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'chips', component: ChipsComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mdRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MaterialDesignRoutingModule { }
