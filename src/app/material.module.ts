import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {  MatListModule } from '@angular/material/list';
import {  MatMenuModule } from '@angular/material/menu';
import { MatTableModule  } from '@angular/material/table';
import {   MatDividerModule } from '@angular/material/divider';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {  MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import {  MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
         MatMenuModule,
         MatTableModule,
         MatDividerModule,
         MatProgressSpinnerModule,
         MatInputModule,
         MatCardModule,
         MatSlideToggleModule,
         MatSelectModule,
         MatDialogModule,
         MatDatepickerModule,
         MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
         MatMenuModule,
         MatTableModule,
         MatDividerModule,
         MatProgressSpinnerModule,
         MatInputModule,
         MatCardModule,
         MatSlideToggleModule,
         MatSelectModule,
         MatDialogModule,
         MatDatepickerModule,
         MatNativeDateModule
  ]
})
export class MaterialModule { }
