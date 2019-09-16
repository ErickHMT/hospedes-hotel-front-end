import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Hospede } from './hospede';

@Injectable()
export class HospedeService {

    private URL = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    findAll(): Observable<Hospede[]> {
        return this.http
            .get<Hospede[]>(`${this.URL}/hospedes`);
    }

    findByName(nomeHospede: string): Observable<Hospede[]> {
        return this.http
            // .get<Hospede[]>(`${this.URL}/hospedes/nome/${nome}`);
            .get<Hospede[]>(`${this.URL}/hospedes/nome/`, {
                params: {
                    nome: `${nomeHospede}`
                }
            });
    }

    salvar(hospede: Hospede): Observable<Hospede> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        if (hospede.id) {
            return this.http
                .put<Hospede>(`${this.URL}/hospedes`, JSON.stringify(hospede), httpOptions);
        } else {
            return this.http
                .post<Hospede>(`${this.URL}/hospedes`, JSON.stringify(hospede), httpOptions);
        }
    }

    delete(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/hospedes/${id}`);
    }
}
