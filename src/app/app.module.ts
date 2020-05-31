import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultorComponent } from './componentes/consultor/consultor.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
