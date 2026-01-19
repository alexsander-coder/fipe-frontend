import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FipePublicService {

  private readonly BASE_URL = 'https://fipe.parallelum.com.br/api/v2/cars';

  constructor(private http: HttpClient) { }

  listarMarcas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/brands`);
  }

  listarModelos(brandId: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/brands/${brandId}/models`);
  }
}
