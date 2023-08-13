import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  Highcharts = Highcharts
  chartOptions={}
  constructor(){
  
    this.chartOptions = {
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'How to eat',
        align: 'center'
    },
   
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: '%',
        data: [
            ['Water', 16],
            ['Fruits', 12],
            ['Vegetables', 8],
            ['Leafs', 8],
            ['Meats/Fish', 8],
            ['Beans/peas', 6],
            ['Dry fruits', 7],
            ['Milk', 4],
            ['Carbs', 3]

        ]
    }]


    }


}
}
