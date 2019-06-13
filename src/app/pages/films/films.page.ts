import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.films = this.api.getFilms();
  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length - 2];
    console.log('este es el filmId: ', filmId);
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }
}
