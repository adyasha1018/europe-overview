import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryChartComponent } from './country-chart/country-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryModalComponent } from './dashboard/country-modal/country-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountryChartComponent,
    CountryModalComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
