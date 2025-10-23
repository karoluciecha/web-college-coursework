import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // Abilty to invoke method asynchronously


// This identifies that this is a service
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://api.thedogapi.com/v1';
  private apiKey = 'live_FbAmukVtcprfYqJsdyI4uTLD1JRex3xislI653Af0JPaqibsNCYvGncEaHh3JgRP';

  constructor(private httpClient:HttpClient) { }

  // Get list of all breeds (for dropdown)
  getAllBreeds(): Observable<any[]> {
    const headers = new HttpHeaders({ 'x-api-key': this.apiKey });
    return this.httpClient.get<any[]>(`${this.baseUrl}/breeds`, { headers });
  }

  // Get breed details (optional, but can use the breed data directly from list)
  getBreedById(breedId: number): Observable<any> {
    const headers = new HttpHeaders({ 'x-api-key': this.apiKey });
    return this.httpClient.get<any>(`${this.baseUrl}/breeds/${breedId}`, { headers });
  }
}
