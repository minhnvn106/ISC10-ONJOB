import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CerType } from './CerType';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()

export class CerTypeService {
    url = 'http://localhost:8081/certypes';
    urlId = 'http://localhost:8081/certypes';

    constructor(private http: HttpClient) { }

    getCerTypes() {
        return this.http.get<CerType[]>(this.url);
    }

    addCerType(certype: CerType): Observable<CerType> {
        return this.http.post<CerType>(this.url, JSON.stringify(certype), httpOptions);
    }

    updateCerType(certype: CerType): Observable<CerType> {
        console.log(this.url + '/' + certype.id);

        return this.http.put<CerType>(this.url + '/' + certype.id, certype, httpOptions);
    }

    deleteCerType(id: number): Observable<CerType> {
        console.log(this.url + '/' + id);
        return this.http.delete<CerType>(this.url + '/' + id, httpOptions);
    }

}

