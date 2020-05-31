import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultorComponent } from './componentes/consultor/consultor.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultorService } from './servicos/consultor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroEnumParaOptions } from './filtros/filtroEnumParaOptions';

@NgModule({
  declarations: [
    AppComponent,
    ConsultorComponent,
    FiltroEnumParaOptions
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ConsultorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
