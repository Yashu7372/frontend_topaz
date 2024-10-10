import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-stat-cards',
  templateUrl: './stat-cards.component.html',
  styleUrls: ['./stat-cards.component.css']
})
export class StatCardsComponent implements OnInit {
  openTickets = 0;
  unassignedTickets = 0;
  highPriorityOpenTickets = 0;
  openChangeRequests = 0;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(tickets => {
      this.openTickets = tickets.filter(t => t.status === 'Open').length;
      this.unassignedTickets = tickets.filter(t => !t.supportRep).length;
      this.highPriorityOpenTickets = tickets.filter(t => t.status === 'Open' && t.priority === 'High').length;
      this.openChangeRequests = tickets.filter(t => t.status === 'Open' && t.type === 'Change Request').length;
    });
  }
}
