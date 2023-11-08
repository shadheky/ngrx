import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxTesterComponent } from './components/redux-tester/redux-tester.component';

const routes: Routes = [
  {
    path: '',
    component:ReduxTesterComponent
  },
  {
    path: 'teste',
    loadChildren: () => import('./modules/teste-routing/teste-routing.module').then(m => m.TesteRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
