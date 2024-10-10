import { Component, OnInit } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ApexLegend } from 'ng-apexcharts';
import { TicketService } from '../services/ticket.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
};

@Component({
  selector: 'app-tickets-chart',
  templateUrl: './tickets-chart.component.html',
  styleUrls: ['./tickets-chart.component.css']
})
export class TicketsChartComponent implements OnInit {
  public chartOptions: ChartOptions = {
    series: [],
    chart: {
      type: 'pie',
      width: 380
    },
    labels: [],
    responsive: [ 
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    legend: {
      position: 'top'
    }
  };

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(tickets => {
      const teamMap = new Map();
      tickets.forEach(ticket => {
        if (ticket.status === 'Open' && ticket.team) {
          teamMap.set(ticket.team, (teamMap.get(ticket.team) || 0) + 1);
        }
      });

      
      this.chartOptions.series = Array.from(teamMap.values()) as ApexNonAxisChartSeries;
      this.chartOptions.labels = Array.from(teamMap.keys());
    });
  }
}
