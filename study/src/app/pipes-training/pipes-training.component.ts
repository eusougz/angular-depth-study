import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-training',
  templateUrl: './pipes-training.component.html',
  styleUrls: ['./pipes-training.component.scss']
})
export class PipesTrainingComponent implements OnInit {

  movies: Movie[] = [
    {
      name: 'o Espetacular Universo',
      releaseDate: new Date(2, 2, 2),
      value: 129,
      inMovieTheater: false
    },
    {
      name: 'a Menina e o Porquinho',
      releaseDate: new Date(2, 4, 5),
      value: 229,
      inMovieTheater: true
    },
    {
      name: 'Velozes e poderosos',
      releaseDate: new Date(3, 8, 9),
      value: 399,
      inMovieTheater: true
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Movie {
  name: string;
  releaseDate: Date;
  value: number;
  inMovieTheater: boolean;
}
