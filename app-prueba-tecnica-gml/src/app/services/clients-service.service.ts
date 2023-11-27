import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { Observable, map } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  private url = 'http://localhost:8080/api/clients';
  private segunda ='';

   today: Date = new Date();
    pipe = new DatePipe('en-US');
    todayWithPipe = null;
    respuesta: string ='';
  
  constructor(private http: HttpClient) { }

  newClient(client: ClientModel){  

    console.log('imprimiendo servicio',`${this.url}`);
    
    let initial = client.businessId.substring(0,1).trim();
        
    this.segunda = client.businessId.substring(client.businessId.indexOf(' '), client.businessId.length).trim();
    console.log(`segundo nombre: ${this.segunda}`);   
    client.sharedKey = initial.concat(this.segunda);
    client.dataAdded = this.pipe.transform(Date.now(), 'yyyy-MM-dd');    
    console.log(`fecha: ${client.dataAdded}`);
    
    console.log(`imprimiendo primera segunda: ${client.sharedKey.trim()}`);

    return this.http.post(this.url,client).pipe(map((resp: any) =>{
     client.msj = resp.msj;
     console.log(`Mensaje respuesta: ${client.msj}`);
     return client;
    }));
    
  }

  getAllClient(): Observable<ClientModel[]>{ 

    return this.http.get<ClientModel[]>(this.url);
  }
}
