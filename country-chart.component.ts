import { Component } from '@angular/core';
import { PopulationDataService } from '../population-data.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent {
  pieChartData: any[] = [];

  constructor(private populationService: PopulationDataService) {}

  ngOnInit(): void {
    this.populationService.getPopulationData().subscribe((data: any[]) => {
      this.pieChartData = data;
      this.createPieChart();
    });
  }

  createPieChart() {
    const ctx = document.getElementById('populationPieChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.pieChartData.map(country=>country.name),
        datasets: [{
          data: this.pieChartData.map(country=>country.population),
          backgroundColor: ['red','blue','yellow','orange','green'],
        }]
      }
    });
  }
  
}
