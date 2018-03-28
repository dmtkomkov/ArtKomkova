import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Item } from '../../interfaces';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getFolderItems(folderId: string, mimeType: string = null): Observable<Item[]> {
    let query: string = `"${folderId}"+in+parents`
    if (mimeType != null) query += `+and+mimeType+=+"${mimeType}"`
    let params: HttpParams = new HttpParams({
      fromObject: {
        'q': query,
        'key': environment.apiKey,
        'fields': 'files(mimeType,name,id,webContentLink)',
      }
    });
    return this.http.get(environment.apiUrl, { params: params }).map(res => res.files);
  }
}
