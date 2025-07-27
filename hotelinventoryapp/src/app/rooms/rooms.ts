import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './room';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms implements OnInit {
  hotelName = 'Hilton Hotel';
  NumberofRooms = '10';
  exibir = false;


  rooms: Room = {
    total: 20,
    quartosdisponiveis: 10,
    quartosreservado: 5
  }

  roomList: RoomList[] = [
    {
      numero: 1,
      tipo: 'Solteiro',
      preco: 1000,
      cortesias: 'Wi-fi, Café da manhã, Ar-condicionado, TV a cabo',
      photos: 'single-room.jpg',
      checkin: new Date('2025-07-27'),
      checkout: new Date('2025-07-28')
    },
    {
      numero: 2,
      tipo: 'Casal',
      preco: 2500,
      cortesias: 'Wi-fi, Café da manhã, Ar-condicionado, TV a cabo',
      photos: 'double-room.jpg',
      checkin: new Date('2025-07-27'),
      checkout: new Date('2025-07-28')
    },
    {
      numero: 3,
      tipo: 'Luxo',
      preco: 5000,
      cortesias: 'Wi-fi, Café da manhã, Ar-condicionado, TV a cabo, SPA',
      photos: 'luxury-room.jpg',
      checkin: new Date('2025-07-27'),
      checkout: new Date('2025-07-28')
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  pesquisar() {
    this.exibir = !this.exibir;
    console.log('Exibir: ', this.exibir);
  }
}
