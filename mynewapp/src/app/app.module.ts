// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeriesModule,
    HttpClientModule, // Esto es necesario
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
