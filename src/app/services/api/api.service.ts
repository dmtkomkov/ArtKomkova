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

  buildHttpParams(
    folderId: string,
    mimeType: string = null,
    name: string = null,
  ): HttpParams {
    let query: string = `"${folderId}"+in+parents`
    if (mimeType != null) query += `+and+mimeType+=+"${mimeType}"`
    if (name != null) query += `+and+name+=+"${name}"`
    return new HttpParams({
      fromObject: {
        'q': query,
        'key': environment.apiKey,
        'fields': 'files(mimeType,name,id,webContentLink)',
      }
    });
  }

  getFolderItems(folderId: string, mimeType: string = null): Observable<Item[]> {
    let params: HttpParams = this.buildHttpParams(folderId, mimeType);
    return this.http.get<{files: Item[]}>(environment.apiUrl, { params: params })
      .map(res => res.files);
  }

  getFolderItem(folderId: string, name: string): Observable<Item> {
    let params: HttpParams = this.buildHttpParams(folderId, 'image/jpeg', name);
    return this.http.get<{files: Item[]}>(environment.apiUrl, { params: params })
      .map(res => res.files.length > 0? res.files[0]: null);
  }
}
