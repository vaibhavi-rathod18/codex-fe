import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [
  { path: '',  component: DashboardComponent,
    children: [
      { path: 'expenses', component: ExpenseComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
