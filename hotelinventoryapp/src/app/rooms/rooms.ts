import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms implements OnInit {
    hotelName = 'Hilton Hotel';
    NumberofRooms = '10';
    OcultarQuartos = true;

    constructor() {}

    ngOnInit(): void{

    }

    pesquisar(){
      this.OcultarQuartos = !this.OcultarQuartos;
    }
  }
