import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryModalComponent } from './country-modal/country-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private dialog: MatDialog){

}
  europeanCountries = [
    { name: 'France', flagUrl: '../../assets/FRANCE_FLAG_IMAGE.png', population:1800000, language:'French' },
    { name: 'Germany', flagUrl: '../../assets/GERMANY_FLAG_IMAGE.png' , population:1800000, language:'German' },
    { name: 'Spain', flagUrl: '../../assets/SPAIN_FLAG_IMAGE.png' , population:1800000, language:'Spanish' },
    { name: 'Italy', flagUrl: '../../assets/ITALY_FLAG_IMAGE.png', population:1800000, language:'Italian'  },
    { name: 'Greece', flagUrl: '../../assets/GREECE_FLAG_IMAGE.png', population:1800000, language:'Greek'  },
  ];

openModal(country: any) {
  const dialogRef = this.dialog.open(CountryModalComponent, {
    width: '500px',
    data:{
     selectedCountry:country
    }
  });
}


}
