import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Strawhats} from "./example";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exam-two';

// Define the array of Straw Hat Pirates
 strawhats: Strawhats[] = [
  new Strawhats(1, "Monkey D. Luffy", "", 19, 3000000000),
  new Strawhats(2, "Roronoa Zoro", "", 21, 1111000000),
  new Strawhats(3, "Nami", "", 20, 366000000),
  new Strawhats(4, "Usopp", "", 19, 500000000),
  new Strawhats(5, "Sanji", "", 21, 1032000000),
  new Strawhats(6, "Tony Tony Chopper", "", 17, 1000),
  new Strawhats(7, "Nico Robin", "", 30, 930000000),
  new Strawhats(8, "Franky", "", 36, 394000000),
  new Strawhats(9, "Brook", "", 90, 383000000),
   new Strawhats(10, "Jinbe", "", 46, 1100000000)
];



}
