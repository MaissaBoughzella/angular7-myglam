import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  datas = "";
  constructor(private serv:ServerService) { }

  ngOnInit() {
    this.serv.getData().subscribe( (file:any ) => {
      this.datas = file.data;
      console.log(file.data);
    })
  }

}




 /*Clicked(city){
    AppComponent.prototype.cityValue=city;
    this.apiService.getData().subscribe((data:any)=>{
    this.temp="tempearture:" + String((parseFloat(data.main.temp)-273.15).toFixed())+"°C";
    this.humidity="humidity:" + data.main.humidity+ "%";
    this.desc=data.weather[0].description;

})
}*/
