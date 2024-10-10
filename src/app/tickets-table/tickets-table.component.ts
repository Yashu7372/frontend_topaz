import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.css']
})
export class TicketsTableComponent implements OnInit {
  ticketData: any[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(tickets => {
      const ticketMap = new Map();
      tickets.forEach(ticket => {
        if (ticket.status === 'Open') {
          const rep = ticket.supportRep || 'Unassigned';
          ticketMap.set(rep, (ticketMap.get(rep) || 0) + 1);
        }
      });
      this.ticketData = Array.from(ticketMap, ([supportRep, openTickets]) => ({ supportRep, openTickets }))
        .sort((a, b) => b.openTickets - a.openTickets);
    });
  }
}
