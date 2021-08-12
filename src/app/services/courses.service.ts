import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  courses = [
    {
      title: 'Curso Angular',
      description: 'Desc 1',
    },
    {
      title: 'Curso React',
      description: 'Desc 2',
    },
    {
      title: 'Curso Vue',
      description: 'Desc 3',
    },
  ];
}
