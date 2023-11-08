import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, trocaNavHome, trocaNavTeste } from 'src/app/store/app.state';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-router-tester',
  templateUrl: './router-tester.component.html',
  styleUrls: ['./router-tester.component.css']
})
export class RouterTesterComponent {
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
    this.store.dispatch(trocaNavTeste());
 
    
  }
}
