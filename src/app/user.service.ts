import { Injectable } from '@angular/core';
import {Observable, of as observabeOf} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import {map, switchMap} from 'rxjs/operators';
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid = this.afAuth.authState.pipe(
    map(authSate => {
      if(!authSate){
        return null;
      }
      else{
        return authSate.uid;
      }
    })
  );
  /* isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap( uid => {
      if(!uid){
        return observabeOf(false);
        alert("You are not admin");
      }
      else{
        return this.db.object<boolean>('/Admin/'+uid).valueChanges();
      }
    })
  ) */
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }
  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  facebookLogin() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());  
  }

  googleLogout() {
    this.afAuth.auth.signOut();
  }
}

