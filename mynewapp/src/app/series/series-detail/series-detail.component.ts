import { Component, Input } from '@angular/core';
import { Serie } from '../serie.model';

@Component({
  standalone:false,
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css'],
})
export class SeriesDetailComponent {
  @Input() serie: Serie | null = null;
}
