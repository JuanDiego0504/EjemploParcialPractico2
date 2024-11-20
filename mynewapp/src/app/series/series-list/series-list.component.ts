import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../serie.model';

@Component({
  standalone:false,
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  selectedSerie: Serie | null = null; // Serie seleccionada para mostrar en el detalle
  averageSeasons: number = 0; // Promedio de temporadas

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    // Obtener las series y calcular el promedio
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      this.calculateAverageSeasons();
    });
  }

  // Calcular el promedio de temporadas
  calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }

  // Seleccionar una serie para mostrar el detalle
  onSelectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
