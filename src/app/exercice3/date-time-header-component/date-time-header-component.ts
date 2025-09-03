import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-date-time-header-component',
  imports: [CommonModule],
  templateUrl: './date-time-header-component.html',
  styleUrl: './date-time-header-component.css'
})
export class DateTimeHeaderComponent implements OnInit, OnDestroy {
  currentDateTime = new Date();
  private interval?: number;

  ngOnInit() {
    this.interval = window.setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
  
  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}
