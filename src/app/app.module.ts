import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxTesterComponent } from './components/redux-tester/redux-tester.component';
import { RouterTesterComponent } from './components/router-tester/router-tester.component';
import { TesteRoutingModule } from './modules/teste-routing/teste-routing.module';
import { TesteRoutingComponent } from './modules/teste-routing/teste-routing.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    ReduxTesterComponent,
    RouterTesterComponent,
    TesteRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
