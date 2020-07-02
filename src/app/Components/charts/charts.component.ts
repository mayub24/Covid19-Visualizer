import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { GetDataService } from '../../Services/get-data.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  typedValue = 'canada';


  barz = [
    {
      name: 'pie'
    },
    {
      name: 'bar'
    },
    {
      name: 'line'
    },
    {
      name: 'radar'
    },
    {
      name: 'doughnut'
    }
  ]

  config: SwiperOptions = {
    effect: 'coverflow',
    initialSlide: 2,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

  barChart: any;
  allPulledData: any;
  barChartType: any = 'bar';

  constructor(private getService: GetDataService) { }

  ngOnInit() {
    this.getService.getDetailedData().subscribe((moreData) => {
      console.log(moreData);

      this.allPulledData = moreData;

      this.pullAllData(this.allPulledData)
    });


  };

  changeGraph(e) {

    console.log(e);


    this.barChartType = e;

    console.log(this.barChartType);

    this.pullAllData(this.allPulledData);


    var barz = <HTMLElement>document.getElementById("barChartz");
    barz.remove();


  }

  pullAllData(data) {

    Chart.defaults.global.defaultFontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#777';

    console.log(this.barChartType);


    // Chart #1
    this.barChart = new Chart('barChartz',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[0].provinceState}`,
            data: [
              `${data[0].confirmed}`,
              `${data[0].recovered}`,
              `${data[0].deaths}`,
              `${data[0].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            // borderWidth: 3,
            // borderColor: 'black',
            // hoverBorderWidth: 3,
            // hoverBorderColor: [
            //   'gray',
            //   'green',
            //   'red',
            //   'blue'
            // ]
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
              fontColor: 'black'
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

    // Chart #2
    this.barChart = new Chart('barChartz2',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[1].provinceState}`,
            data: [
              `${data[1].confirmed}`,
              `${data[1].recovered}`,
              `${data[1].deaths}`,
              `${data[1].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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



    // Chart #3
    this.barChart = new Chart('barChartz3',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[2].provinceState}`,
            data: [
              `${data[2].confirmed}`,
              `${data[2].recovered}`,
              `${data[2].deaths}`,
              `${data[2].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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



    // Chart #4
    this.barChart = new Chart('barChartz4',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[3].provinceState}`,
            data: [
              `${data[3].confirmed}`,
              `${data[3].recovered}`,
              `${data[3].deaths}`,
              `${data[3].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            display: true,
            text: `COVID-19 Cases in ${data[3].provinceState}`,
            fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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



    // Chart #5
    this.barChart = new Chart('barChartz5',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[4].provinceState}`,
            data: [
              `${data[4].confirmed}`,
              `${data[4].recovered}`,
              `${data[4].deaths}`,
              `${data[4].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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



    // Chart #6
    this.barChart = new Chart('barChartz6',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[5].provinceState}`,
            data: [
              `${data[5].confirmed}`,
              `${data[5].recovered}`,
              `${data[5].deaths}`,
              `${data[5].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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


    // Chart #7
    this.barChart = new Chart('barChartz7',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[6].provinceState}`,
            data: [
              `${data[6].confirmed}`,
              `${data[6].recovered}`,
              `${data[6].deaths}`,
              `${data[6].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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


    // Chart #8
    this.barChart = new Chart('barChartz8',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[7].provinceState}`,
            data: [
              `${data[7].confirmed}`,
              `${data[7].recovered}`,
              `${data[7].deaths}`,
              `${data[7].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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



    // Chart #9
    this.barChart = new Chart('barChartz9',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[8].provinceState}`,
            data: [
              `${data[8].confirmed}`,
              `${data[8].recovered}`,
              `${data[8].deaths}`,
              `${data[8].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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


    // Chart #10
    this.barChart = new Chart('barChartz10',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[9].provinceState}`,
            data: [
              `${data[9].confirmed}`,
              `${data[9].recovered}`,
              `${data[9].deaths}`,
              `${data[9].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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


    // Chart #11
    this.barChart = new Chart('barChartz11',
      {
        type: `${this.barChartType}`, // we can have bar, pie, line, radar, etc
        data: {
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths', 'Total Active'],
          datasets: [{
            label: `${data[10].provinceState}`,
            data: [
              `${data[10].confirmed}`,
              `${data[10].recovered}`,
              `${data[10].deaths}`,
              `${data[10].active}`
            ],
            backgroundColor: [
              'rgba(255, 253, 158, 0.8)',
              'rgba(138, 255, 147, 0.7)',
              'rgba(247, 0, 25, 0.7)',
              'rgba(74, 167, 255, 0.7)'
            ],
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 3,
            hoverBorderColor: [
              'gray',
              'green',
              'red',
              'blue'
            ]
          }]
        },
        options: {
          title:
          {
            // display: true,
            // text: 'COVID-19 Cases in Canada by Province',
            // fontSize: 25
          },
          legend:
          {
            display: true,
            labels: {
              fontColor: 'black'
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

