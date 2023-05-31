import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersComponent } from './transfers/transfers.component';
import { QueriesComponent } from './queries/queries.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransfersComponent,
    QueriesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TransfersComponent,
    QueriesComponent
  ]
})
export class TransactionsModule { }
