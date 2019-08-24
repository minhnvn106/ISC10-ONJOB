import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Record } from './Record';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()

export class RecordService {
    url = 'http://localhost:8081/rectypes';
    urlId = 'http://localhost:8081/rectypes';

    constructor(private http: HttpClient) { }

    getRecords() {
        return this.http.get<Record[]>(this.url);
    }

    addRecord(record: Record): Observable<Record> {
        return this.http.post<Record>(this.url, JSON.stringify(record), httpOptions);
    }

    updateRecord(record: Record): Observable<Record> {
        console.log(this.url + '/' + record.id);

        return this.http.put<Record>(this.url + '/' + record.id, record, httpOptions);
    }

    deleteRecord(id: number): Observable<Record> {
        console.log(this.url + '/' + id);
        return this.http.delete<Record>(this.url + '/' + id, httpOptions);
    }

}

