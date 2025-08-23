import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Loading } from '../../shared/components/loading/loading';
import { Coordinate } from '../../shared/components/map/Coordinate.model';
import { Map } from '../../shared/components/map/map';
import { MovieDTO } from '../movies.models';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  imports: [Loading, MatChipsModule, RouterLink, Map],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;
  movie!: MovieDTO;
  trailerURL!: SafeResourceUrl;
  sanitizer = inject(DomSanitizer);
  moviesService = inject(MoviesService);
  coordinates: Coordinate[] = [];

  ngOnInit(): void {
    this.moviesService.getById(this.id).subscribe((movie) => {
      this.movie = movie;
      movie.releaseDate = new Date(movie.releaseDate);
      this.trailerURL = this.transformYoutubeURLToEmbed(movie.trailer);
      if (movie.theaters) {
        this.coordinates = movie.theaters.map((theater) => {
          return {
            latitude: theater.latitude,
            longitude: theater.longitude,
            text: theater.name,
          };
        });
      }
    });
  }

  transformYoutubeURLToEmbed(url: string): SafeResourceUrl | string {
    if (!url) {
      return '';
    }

    // https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUjcmljayBhc3RsZXkgbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D

    let videoId = url.split('v=')[1];
    let ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}
