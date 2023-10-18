import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopulationDataService {
  europeanCountries = [
    { name: 'France', flagUrl: '../../assets/FRANCE_FLAG_IMAGE.png', population:1800000, language:'French' },
    { name: 'Germany', flagUrl: '../../assets/GERMANY_FLAG_IMAGE.png' , population:1800000, language:'German' },
    { name: 'Spain', flagUrl: '../../assets/SPAIN_FLAG_IMAGE.png' , population:1800000, language:'Spanish' },
    { name: 'Italy', flagUrl: '../../assets/ITALY_FLAG_IMAGE.png', population:1800000, language:'Italian'  },
    { name: 'Greece', flagUrl: '../../assets/GREECE_FLAG_IMAGE.png', population:1800000, language:'Greek'  },
  ];
  constructor() { }

  getPopulationData():Observable<any[]>{
    return of(this.europeanCountries)
  }
}
