import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private serverService:ServerService) { }

  ngOnInit() {
  }
/*phones=['note','s8'];

  btnClicked(phone){
    this.phones.push(phone);
  }*/
}
