import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent
  implements
    OnInit,
    OnChanges,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked
{
  @Input() sessionNumber: number;
  @Input('title') title = '';
  @Input() size = 5;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() onCourseClick = new EventEmitter<{ title: string }>();

  constructor() {
    this.sessionNumber = 0;

    console.log('desde constructor');
  }

  asc() {
    this.size = this.size + 1;
    this.sizeChange.emit(this.size);
  }

  desc() {
    this.size = this.size - 1;
    this.sizeChange.emit(this.size);
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log('desde ngOnChanges', simpleChanges);
  }

  ngOnInit(): void {
    console.log('desde ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('desde ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('desde ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('desde ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('desde ngAfterContentChecked');
  }

  onCardClick(): void {
    this.onCourseClick.emit({ title: 'Hola' });
  }
}
