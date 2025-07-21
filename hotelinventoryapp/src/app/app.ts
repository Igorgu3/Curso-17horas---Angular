import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rooms],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'hotelinventoryapp';
}
