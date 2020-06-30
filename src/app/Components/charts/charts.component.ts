import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  barChart: any;

  constructor() { }

  ngOnInit() {
    this.barChart = new Chart('barChartz',
      {
        type: 'bar', // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: 'Ontario',
            data: [
              34660,
              4560,
              56700,
              4560
            ],
            backgroundColor: [
              '#eee',
              '#111',
              '#256',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 4,
            borderColor: [
              'red',
              'red'
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: 'black'
          }]
        },
        options: {
          title:
          {
            display: true,
            text: 'COVID-19 Cases in Canada by Province',
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'green'
            }
          },
          layout: {
            padding:
            {
              top: 50,
              left: 100
            }
          },
          tooltips:
          {
            enabled: true
          }
        },

      });

  }

}
