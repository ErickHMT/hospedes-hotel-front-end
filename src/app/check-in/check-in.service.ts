import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CheckIn } from './check-in';

@Injectable()
export class CheckInService {

    private URL = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    // buscarTodos(): Observable<CheckIn[]> {
    //     return this.http
    //         .get<CheckIn[]>(`${this.URL}/check-in`);
    // }

    // buscarPeloId(id: number): Observable<CheckIn> {
    //     return this.http
    //         .get<CheckIn>(`${this.URL}/check-in/${id}`);
    // }

    salvar(checkin: CheckIn): Observable<CheckIn> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        if (checkin.id) {
            return this.http
                .put<CheckIn>(`${this.URL}/check-in`, JSON.stringify(checkin), httpOptions);
        } else {
            return this.http
                .post<CheckIn>(`${this.URL}/check-in`, JSON.stringify(checkin), httpOptions);
        }
    }
}
