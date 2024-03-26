import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { DirtyChecksComponent } from '../../shared/dirty-checks/dirty-checks.component';
import { TiltDirective } from '../../tilt/tilt.directive';
import { StarRatingComponent } from '../../ui/pattern/star-rating/star-rating.component';
import { MovieImagePipe } from '../movie-image.pipe';
import { MovieModel } from '../movie-model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TiltDirective,
    StarRatingComponent,
    NgFor,
    UpperCasePipe,
    MovieImagePipe,
    NgIf,
    FastSvgComponent,
    DirtyChecksComponent,
  ],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: MovieModel;

  @Input() loading = false;
  @Input() favorite = false;

  @Output() selected = new EventEmitter<MovieModel>();
  @Output() toggleFavorite = new EventEmitter<MovieModel>();

  ngOnInit() {
    if (!this.movie) {
      throw new Error(
        `MovieCardComponent expects movie to be set, ${this.movie} given`
      );
    }
  }

  movieClicked() {
    this.selected.emit(this.movie);
  }

  divs = new Array(150).fill(null).map((v, i) => i);
}
