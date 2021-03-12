import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { LoginComponent } from '../views/login/login.component';
import { UnoComponent } from '../views/uno/uno.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
    { path: '', component: SidebarComponent, children: [
        {path: '', component: LoginComponent},
        {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
        {path: 'login', component: LoginComponent},
        {path: 'uno', component: UnoComponent, canActivate: [AuthGuard]}
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SidebarRoutingModule {}
