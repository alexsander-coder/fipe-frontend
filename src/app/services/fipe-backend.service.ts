import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FipeBackendService {

  private readonly BASE_URL = 'http://localhost:8080/api/fipe';

  constructor(private http: HttpClient) { }

  analisar(brandId: string, modelId: string) {
    return this.http.get<any[]>(
      `${this.BASE_URL}/analise`,
      {
        params: {
          vehicleType: 'cars',
          brandId,
          modelId
        }
      }
    );
  }
}
