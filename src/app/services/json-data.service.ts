import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class JsonDataService 
{

  constructor(private http:Http ) 
  {
    console.log("in Data Service"); 
  }

  getPersonInfo()
  {
      return this.http.get('assets/persons.json')
      .map((res: Response) => res.json());
      // .catch((error: any) => Observable.throw(error.json().error || "server error"));
    }
  
    SaveMyData(newData)
    {

      this.http.post("assets/persons.json",newData).subscribe(res =>
        {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  
      console.log(newData);
    }
}
