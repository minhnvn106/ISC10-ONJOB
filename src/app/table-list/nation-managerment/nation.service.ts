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
    url = 'http://localhost:8081/nations';
    urlId = 'http://localhost:8081/nations';

    constructor(private http: HttpClient) { }

    getNations() {
        return this.http.get<Nation[]>(this.url);
    }

    addNation(nation: Nation): Observable<Nation> {
        return this.http.post<Nation>(this.url, JSON.stringify(nation), httpOptions);
    }

    updateNation(nation: Nation): Observable<Nation> {
        console.log(this.url + '/' + nation.nation_id);

        return this.http.put<Nation>(this.url + '/' + nation.nation_id, nation, httpOptions);
    }

    deleteNation(id: number): Observable<Nation> {
        console.log(this.url + '/' + id);
        return this.http.delete<Nation>(this.url + '/' + id, httpOptions);
    }

}

