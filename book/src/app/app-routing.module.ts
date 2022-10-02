import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './book/list/list.component';
import {DetailComponent} from './book/detail/detail.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [ {
  path: '',
  component: ListComponent,
},
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
