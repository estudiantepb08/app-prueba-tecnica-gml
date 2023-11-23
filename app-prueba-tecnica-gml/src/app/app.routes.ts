import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientComponent } from './pages/client/client.component';

export const routes: Routes = [
    { path: 'clients', component: ClientsComponent },
   // { path: 'client/:id', component: ClientComponent },
    { path: 'client', component: ClientComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'clients' }
];
