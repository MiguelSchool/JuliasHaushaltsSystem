import { NgModule }     from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent }    from './components/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  }
]

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SocialGroupModule { }
