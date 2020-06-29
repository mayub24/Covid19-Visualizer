import { Component, OnInit } from '@angular/core';

// Importing interface
import { data } from '../../Models/ronaData';

// Importing Service
import { GetDataService } from '../../Services/get-data.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  ronaData: data[];
  typedValue = '';
  check: boolean = false;
  errz: string = '';
  provData: any;

  constructor(private getService: GetDataService) {
    //this.getService.getData(this.typedValue);
  }


  ngOnInit() {
  }

  btnClick(val) {
    this.typedValue = val;

    // API #1
    this.getService.getData(val).subscribe(allData => {

      console.log(allData);


      this.ronaData = allData;

      this.check = true;

    }, err => {
      this.errz = `Cannot find Country ${this.typedValue}`;
      console.log(this.errz);
      this.check = false;

    })


    // API #2
    this.getService.getDetailedData(val).subscribe((moreData) => {
      console.log(moreData);

      this.provData = moreData;

      moreData.forEach((itm) => {
        console.log(itm);
      })


    })

  }


}
