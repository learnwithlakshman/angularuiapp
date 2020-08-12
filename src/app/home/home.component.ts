import { Component, OnInit } from '@angular/core';
import {Server} from '../shared/server.model';
import { SummaryResolver } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "Welcome to Angular World!";
  imgSrc = "../../assets/img/off.png";
  username:string = "Manoj Kumar";
  status = false;

  servers:Server[] = [
      {"ip":"232.100.100.996","status":false},
      {"ip":"232.100.100.997","status":true},
      {"ip":"232.100.100.998","status":false},
      {"ip":"232.100.100.999","status":true}
  ]



  constructor() { }

  ngOnInit(): void {
      setTimeout(() => {
        this.username = "Learning Angular is fun!";
      }, 3000);

  }

  toggleBlub(){
      this.status = !this.status;
      this.imgSrc = this.status ?  "../../assets/img/on.png" :  "../../assets/img/off.png";
  }

  changeStatus(server:Server){
      server.status = !server.status;
  }

  removeServer(server:Server){
    this.servers = this.servers.filter(e=>e.ip !== server.ip);
  }

}
