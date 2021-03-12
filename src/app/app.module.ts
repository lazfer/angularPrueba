//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Componentes 
import { AppComponent } from './app.component';
//Module
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material.module';
//Aditional
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ViewsModule,
    MaterialModule,
    ComponentsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
