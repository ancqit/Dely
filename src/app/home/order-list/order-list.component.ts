/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController } from '@ionic/angular';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  item;
  itemCLick: any;
  sideButton;
  modal: HTMLElement;
  constructor(
    public dataService: DataService,
    public modalController: ModalController,
    public router: Router
  ) {}

  ngOnInit() {
    this.item = this.dataService.orderItemGet;
    console.log(this.item);
  }

  async presentModal(value) {
    this.dataService.vegItems = value.items;
    const modal = await this.modalController.create({
      component: OrderDetailsComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
    });
    return await modal.present();
  }

  takeOrder() {
    this.router.navigate(['takeOrder']);
  }
}
