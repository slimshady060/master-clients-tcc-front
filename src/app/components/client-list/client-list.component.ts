import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'components-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];
  cols: string[] = ['name', 'email'];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
      this.loadClients();
  }

  loadClients() {
    return this.clientService.getClients()
       .subscribe((data: Client[]) => {
         this.clients = data;
       })
  }

}
