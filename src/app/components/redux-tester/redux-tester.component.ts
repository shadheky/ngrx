import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, trocaNavHome, trocaNavTeste } from 'src/app/store/app.state';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-redux-tester',
  templateUrl: './redux-tester.component.html',
  styleUrls: ['./redux-tester.component.css']
})
export class ReduxTesterComponent implements OnInit {
  title = 'teste';
  nav$ = {
    path: this.store
    .select('app')
    .pipe(
      map( e => e.nav.path )
    ),
    text: this.store
    .select('app')
    .pipe(
      map( e => e.nav.text )
    )
  };


  constructor(private store: Store<{app: AppState}>) { }

  ngOnInit() {
    this.store.dispatch(trocaNavHome());
  }

}
