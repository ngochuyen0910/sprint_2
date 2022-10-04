import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './book/list/list.component';
import {DetailComponent} from './book/detail/detail.component';
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from './security/login/login.component';
import {AuthGuard} from './security/auth.guard.';
import {ResetPasswordComponent} from './security/reset-password/reset-password.component';
import {VerityResetPasswordComponent} from './security/verity-reset-password/verity-reset-password.component';

const routes: Routes = [{
  path: '',
  component: ListComponent,
  canActivate: [AuthGuard],
  data: {
    roles: ['ROLE_ADMIN', 'ROLE_USER']
  }
},
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'verify-reset-password/:name',
    component: VerityResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
