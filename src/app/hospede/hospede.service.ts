import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Hospede } from './hospede';

@Injectable()
export class HospedeService {

    private URL = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

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

    findByFiltro(filter: any): Observable<Hospede[]> {
        return this.http
            .post<Hospede[]>(`${this.URL}/hospedes/filtro`, JSON.stringify(filter), this.httpOptions);
    }

    salvar(hospede: Hospede): Observable<Hospede> {
        if (hospede.id) {
            return this.http
                .put<Hospede>(`${this.URL}/hospedes`, JSON.stringify(hospede), this.httpOptions);
        } else {
            return this.http
                .post<Hospede>(`${this.URL}/hospedes`, JSON.stringify(hospede), this.httpOptions);
        }
    }

    delete(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/hospedes/${id}`);
    }
}
