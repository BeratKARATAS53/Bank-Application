// @angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginPageComponent } from './pages/LoginPage/LoginPage.component';
import { MainPageComponent } from './pages/MainPage/MainPage.component';
import { TransfersPageComponent } from './pages/TransfersPage/TransfersPage.component';
import { RegisterPageComponent } from './pages/RegisterPage/RegisterPage.component';
import { AccountsPageComponent } from './pages/AccountsPage/AccountsPage.component';
import { AccountDetailPageComponent } from './pages/AccountDetailPage/AccountDetailPage.component';

const routes: Routes = [
    { path: 'accounts', component: AccountsPageComponent },
    { path: 'account/:id', component: AccountDetailPageComponent },
    { path: 'transfers', component: TransfersPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'main', component: MainPageComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponent = [
    AccountDetailPageComponent,
    AccountsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TransfersPageComponent,
    MainPageComponent,
];
