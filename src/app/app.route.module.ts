import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesListComponent } from './components/agencies-list/agencies-list.component';
import { AgencyDetailComponent } from './components/agency-detail/agency-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: AgenciesListComponent,
  },
  {
    path: 'detail/:id',
    component: AgencyDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
