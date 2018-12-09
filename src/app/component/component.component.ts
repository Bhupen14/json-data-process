import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../services/json-data.service';
import { Http, Response,HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit 
{

  name: string;
  age:number;
  id:number;
  myData:any[];

  constructor(private dataSevice:JsonDataService) 
  {
      console.log("in component"); 

      dataSevice.getPersonInfo().subscribe(data =>
        {
          this.myData = data['People'];
        })
  }

  ngOnInit() 
  {
    this.name='';
    this.age=0;
    this.id=0;
  
  }


  saveInfo(newPerson) : void 
  {
      this.dataSevice.SaveMyData(newPerson);
  }

}
