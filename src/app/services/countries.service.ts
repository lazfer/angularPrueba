import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries = [];
  constructor(private http: HttpClient) {
   }

  //Obtiene los countries 
  getCountries():Observable<any>{
    const list = [];
    return this.http.get(environment.urlCountries).pipe(
      map( res => {
        const temp = Object.entries(res['data']);
         temp.forEach(ele => {
           list.push(ele[1]);
         });
        return list;
      })

    )
  }
}
