import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Province } from './Province';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()

export class ProvinceService {
    url = 'http://localhost:8081/provinces';
    urlId = 'http://localhost:8081/provinces';

    constructor(private http: HttpClient) { }

    getProvinces() {
        return this.http.get<Province[]>(this.url);
    }

    addProvince(province: Province): Observable<Province> {
        return this.http.post<Province>(this.url, JSON.stringify(province), httpOptions);
    }

    updateProvince(province: Province): Observable<Province> {
        console.log(this.url + '/' + province.id);

        return this.http.put<Province>(this.url + '/' + province.id, province, httpOptions);
    }

    deleteProvince(id: number): Observable<Province> {
        console.log(this.url + '/' + id);
        return this.http.delete<Province>(this.url + '/' + id, httpOptions);
    }

}

