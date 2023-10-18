import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryChartComponent } from './country-chart/country-chart.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'charts', component: CountryChartComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
