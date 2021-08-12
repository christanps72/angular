import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy, DoCheck {
  courses;
  ejemplo = {
    title: 'hola',
    content: 'quetal',
  };
  title = 'Angular';
  sNumber = 1;
  parrafo = '';
  inputText = 'Banana in the box';
  size = 18;

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.courses;
  }

  ngOnInit(): void {
    // console.log('después del constructor');
  }

  courseClick(event: { title: string }): void {
    console.log(event, 'Data que viene del hijo');
  }
  ngDoCheck(): void {
    console.log('desde ngDoCheck');
  }

  changeTitleAndSessionNumber() {
    this.title = 'Título cambiado';
    this.sNumber = 20;
  }
  changeParrafo() {
    this.parrafo = 'parrafo cambiado';
  }

  showInputValue(): void {
    console.log(this.inputText, 'inputText');
  }

  ngOnDestroy(): void {
    console.log('antes de ser destruido');
  }
}
