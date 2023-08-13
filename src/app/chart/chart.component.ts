import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
Highcharts = Highcharts
chartOptions={}
constructor(){
  this.chartOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Workout<br>rates<br>May<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Walking',
        innerSize: '50%',
        data: [
            ['Walking', 53.86],
            ['Weight lifting', 20.97],
            ['Running', 5.52],
            ['Swimming', 12.98],
            ['Aerobics', 3.90],
            {
                name: 'Other',
                y: 8.77,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
};



}


}
