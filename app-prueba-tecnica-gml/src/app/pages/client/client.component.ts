import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClientModel } from '../../models/client.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ClientsServiceService } from '../../services/clients-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive ,FontAwesomeModule, FormsModule, HttpClientModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  constructor(private clientsService: ClientsServiceService){}

  faCoffee = faCoffee;

  client = new ClientModel();

  guardar(form: NgForm){
    if(form.invalid){
      console.log('formulario no valido');      
    }
    console.log(form);
    console.log(this.client);
    this.clientsService.newClient(this.client).subscribe(resp => {console.log(resp);});
  }
}
