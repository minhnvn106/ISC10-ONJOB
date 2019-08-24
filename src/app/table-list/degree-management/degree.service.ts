import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Degree } from './Degree';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()

export class DegreeService {
    url = 'http://localhost:8081/degrees';
    urlId = 'http://localhost:8081/degrees';

    constructor(private http: HttpClient) { }

    getDegrees() {
        return this.http.get<Degree[]>(this.url);
    }

    addDegree(degree: Degree): Observable<Degree> {
        return this.http.post<Degree>(this.url, JSON.stringify(degree), httpOptions);
    }

    updateDegree(degree: Degree): Observable<Degree> {
        console.log(this.url + '/' + degree.Deg_id);

        return this.http.put<Degree>(this.url + '/' + degree.Deg_id, degree, httpOptions);
    }

    deleteDegree(id: number): Observable<Degree> {
        console.log(this.url + '/' + id);
        return this.http.delete<Degree>(this.url + '/' + id, httpOptions);
    }

}

