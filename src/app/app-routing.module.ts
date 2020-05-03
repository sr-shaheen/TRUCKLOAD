
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const dashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);
const ordersdModule = () => import('./orders/orders.module').then(x => x.OrdersModule);
const customerModule = () => import('./customer/customer.module').then(x => x.CustomerModule);
const mapsModule = () => import('./maps/maps.module').then(x => x.MapsModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'orders', loadChildren: ordersdModule, canActivate: [AuthGuard] },
    { path: 'dashboard', loadChildren: dashboardModule, canActivate: [AuthGuard] },
    { path: 'customer', loadChildren: customerModule, canActivate: [AuthGuard] },
    { path: 'maps', loadChildren: mapsModule, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
