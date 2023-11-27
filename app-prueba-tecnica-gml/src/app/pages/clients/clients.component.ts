import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClientsServiceService } from '../../services/clients-service.service';
import { ClientModel } from '../../models/client.model';
import { ClientComponent } from '../client/client.component';
import { MenuComponent } from '../../nav/menu/menu.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HttpClientModule, ClientComponent, MenuComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  icon = faCoffee;     
  clients: ClientModel[] = [];   
  pipe = new DatePipe('en-US');
  
  constructor(private clientsServiceService: ClientsServiceService){}

  ngOnInit(){
    this.clientsServiceService.getAllClient().subscribe(resp =>{
      console.log(resp);      
      this.clients = resp === null ? []: resp;
    });
  }

}
