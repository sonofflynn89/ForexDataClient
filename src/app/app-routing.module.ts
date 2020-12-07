import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FollowPairsComponent } from './follow-pairs/follow-pairs.component';
import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:user_id', component: DashboardComponent },
  { path: 'historical-data/:pair_name', component: HistoricalDataComponent },
  { path: 'follow-pairs/:user_id', component: FollowPairsComponent },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
