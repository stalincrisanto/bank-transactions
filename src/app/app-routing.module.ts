import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransfersComponent } from './transactions/transfers/transfers.component';
import { QueriesComponent } from './transactions/queries/queries.component';
import { LoginComponent } from './transactions/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'transfer',
    component: TransfersComponent,
    pathMatch: 'full',
  },
  {
    path: 'balance',
    component: QueriesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
