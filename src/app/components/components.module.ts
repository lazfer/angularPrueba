import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AlertComponent } from './alert/alert.component';
import { InfoComponent } from './info/info.component';
import { MnsComponent } from './mns/mns.component';



@NgModule({
  declarations: [ToolbarComponent, AlertComponent, InfoComponent, MnsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
exports: [
  ToolbarComponent,
  AlertComponent
]
})
export class ComponentsModule { }
