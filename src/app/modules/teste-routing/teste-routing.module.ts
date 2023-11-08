import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteRoutingComponent } from './teste-routing.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterTesterComponent } from 'src/app/components/router-tester/router-tester.component';

const routes: Routes = [
  {
    path: '',
    component: TesteRoutingComponent,
    children: [
      {
        path:'tester',
        component: RouterTesterComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteRoutingModule { }
