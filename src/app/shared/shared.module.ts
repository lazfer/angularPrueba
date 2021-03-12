import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { ComponentsModule } from '../components/components.module';
import { SidebarRoutingModule } from './sidebar.routing.module';
@NgModule({
  declarations: [
  NotFoundComponent,
  SidebarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    SidebarRoutingModule
  ],
  exports: [
  NotFoundComponent,
  SidebarComponent
  ]
})
export class SharedModule { }
