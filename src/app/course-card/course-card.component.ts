import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {


  @Input()
  course!: Course;
  @Input()
  title!: string;
  @Input()
  url!: string;
  @Input()
  description!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
