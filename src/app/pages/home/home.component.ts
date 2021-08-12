import { Component, OnChanges, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  characterList: any = null;

  constructor(
    private coursesService: CoursesService,
    private homeService: HomeService
  ) {
    // console.log('desde constructor');
  }

  ngOnChanges(): void {
    // console.log('desde ngOnChanges');
  }

  ngOnInit(): void {
    // console.log(this.coursesService.courses, 'desde ngOnInit');
    this.homeService.fetchCharacters();

    this.homeService.characters.subscribe((res) => {
      this.characterList = res?.results;
    });
  }
}
