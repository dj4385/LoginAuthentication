import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

//import the firebase library
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAy_MsjoC88RnEOcq3dDIBaadu0DZc67T0",
      authDomain: "loginfirebase-73257.firebaseapp.com",
      databaseURL: "https://loginfirebase-73257.firebaseio.com",
      projectId: "loginfirebase-73257",
      storageBucket: "loginfirebase-73257.appspot.com",
      messagingSenderId: "447457260050"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
