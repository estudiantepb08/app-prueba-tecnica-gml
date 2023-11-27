import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientComponent } from './pages/client/client.component';
import { MenuComponent } from './nav/menu/menu.component';

export const routes: Routes = [
    
   // { path: 'client/:id', component: ClientComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'client', component: ClientComponent },
    { path: 'clients', component: ClientsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'menu' }
    
];
