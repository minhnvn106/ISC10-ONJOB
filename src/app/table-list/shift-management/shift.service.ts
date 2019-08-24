import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Shift } from './shift';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()

export class ShiftService {
    url = 'http://localhost:8081/shifts';
    urlId = 'http://localhost:8081/shifts';

    constructor(private http: HttpClient) { }

    getShifts() {
        return this.http.get<Shift[]>(this.url);
    }

    addShift(shift: Shift): Observable<Shift> {
        return this.http.post<Shift>(this.url, JSON.stringify(shift), httpOptions);
    }

    updateShift(shift: Shift): Observable<Shift> {
        console.log(this.url + '/' + shift.id);

        return this.http.put<Shift>(this.url + '/' + shift.id, shift, httpOptions);
    }

    deleteShift(id: number): Observable<Shift> {
        console.log(this.url + '/' + id);
        return this.http.delete<Shift>(this.url + '/' + id, httpOptions);
    }

}

