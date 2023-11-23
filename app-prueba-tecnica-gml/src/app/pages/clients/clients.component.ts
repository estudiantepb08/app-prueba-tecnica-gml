import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  icon = faCoffee;

}
