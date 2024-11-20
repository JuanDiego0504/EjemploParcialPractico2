// src/app/series/series.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

@NgModule({
  declarations: [SeriesListComponent, SeriesDetailComponent],
  imports: [CommonModule],
  exports: [SeriesListComponent], // Exporta el componente para usarlo en otros módulos
})
export class SeriesModule {}
