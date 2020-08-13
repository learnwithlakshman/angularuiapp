import { Question } from './../shared/model/question.model';
import { Component, OnInit } from '@angular/core';
import {Server} from '../shared/model/server.model';
import {Employee} from '../shared/model/employee.model';
import * as seeddata from  '../shared/model/seeddata';
import {Player} from '../shared/model/player.model';

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

  viewType:string = 'table';

  players:Player[] = seeddata.players;

  searchStr:string="";
  searchResPlayers:Player[] = [];
  name:string="";

  questions:Question[] = [

    {"qid":1001,"qdata":"Does Python support ++ operator?","options":["yes","no","Sometimes","Always"],"ans":2},
    
    {"qid":1002,"qdata":"Does Python support -- operator?","options":["yes","no","Sometimes","Always"],"ans":2},

  ]

  servers:Server[] = [
      {"ip":"232.100.100.996","status":false},
      {"ip":"232.100.100.997","status":true},
      {"ip":"232.100.100.998","status":false},
      {"ip":"232.100.100.999","status":true}
  ]

  employees:Employee[] = [
    {"name":"Dhoni","dob":new Date(1982,1,21),"salary":18000000},
    {"name":"Robhin","dob":new Date(1984,5,23),"salary":16000000},
    {"name":"Miller","dob":new Date(1983,2,2),"salary":17000000},
  ];
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

  search(){
        if(this.searchStr.trim().length!=0){
         this.searchResPlayers = this.players.filter(p=>p.name.toLocaleLowerCase().includes(this.searchStr.toLocaleLowerCase()));
      }else{
          this.searchResPlayers = [];
      }          
  }

  showName(){
    console.log("Entered name is :"+this.name);
  }
}
