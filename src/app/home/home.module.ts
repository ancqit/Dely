import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { OrderListComponent } from  './order-list/order-list.component';


import { HomePageRoutingModule } from './home-routing.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TakeOrderComponent } from './take-order/take-order.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    OrderListComponent,
    OrderDetailsComponent,
    TakeOrderComponent,
  ],
})
export class HomePageModule {}
