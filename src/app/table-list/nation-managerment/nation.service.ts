import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Nation } from './nation';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()

export class NationService {
    getNationsUrl = 'http://localhost:8081/nations';
    addNationUrl = 'http://localhost:8081/nations';

    constructor(private http: HttpClient) { }

    getNations() {
        return this.http.get<Nation[]>(this.getNationsUrl);
    }

    addNation(nation: Nation): Observable<Nation> {
        return this.http.post<Nation>(this.addNationUrl, JSON.stringify(nation), httpOptions);
    }

}

