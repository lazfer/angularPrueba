import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [

    { path: '', component: SidebarComponent },
    { path: 'nofound', component: NotFoundComponent },
    { path: '**', pathMatch:'full', redirectTo: 'nofound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
