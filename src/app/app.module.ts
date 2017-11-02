import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase Firestore
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Firebase Realtime Database
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Firebase Aurthentication
import { AngularFireAuthModule } from 'angularfire2/auth';

// Facebook Share
import { FacebookModule } from 'ngx-facebook';

// Configs
import { environment } from '../environments/environment';

// Routing
import { AppRoutingModule } from "./app-routing.module";

// Services
import { AppService } from "./app.service";

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/shared/header/header.component";
import { HomeComponent } from './components/home/home.component';
import { MaterialDesignComponent } from './components/material-design/material-design.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MaterialDesignComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    FacebookModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
