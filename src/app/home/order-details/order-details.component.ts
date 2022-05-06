import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit, AfterViewInit {
  veggies: any;

  constructor(public dataService: DataService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.veggies = this.dataService.vegItems;
  }
}
