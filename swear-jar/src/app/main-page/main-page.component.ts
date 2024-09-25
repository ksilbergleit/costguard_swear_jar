import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  currentBalance: number;
  totalBalance: number;

  constructor() {
    this.currentBalance = 0;
    this.totalBalance = 0;
  }

  add(){
    this.currentBalance += 1;
  }

  empty(){
    this.totalBalance += this.currentBalance;
    this.currentBalance = 0;
  }

}
