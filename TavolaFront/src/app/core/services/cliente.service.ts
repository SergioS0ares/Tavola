import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/auth/clientes`;

  getCliente(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get`);
  }

  updateCliente(payload: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, payload);
  }

  deleteCliente(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete`);
  }
}
