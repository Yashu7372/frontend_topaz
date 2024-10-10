import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatCardsComponent } from './stat-cards/stat-cards.component';
import { TicketsTableComponent } from './tickets-table/tickets-table.component';
import { TicketsChartComponent } from './tickets-chart/tickets-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatCardsComponent,
    TicketsTableComponent,
    TicketsChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
