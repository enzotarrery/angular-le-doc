import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private httpClient: HttpClient) {}

  getGenders(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/dictionaries/gender');
  }

  getBloodGroups(): Observable<any> {
    return this.httpClient.get(
      'http://localhost:3000/dictionaries/bloodgroups'
    );
  }

  getDrugs(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/dictionaries/drugs');
  }

  getRepeats(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/dictionaries/repeats');
  }

  getPeriods(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/dictionaries/periods');
  }
}
