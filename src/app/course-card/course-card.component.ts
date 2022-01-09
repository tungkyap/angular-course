import { Course } from './../model/course';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

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

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log("clicked!");
    this.courseSelected.emit(this.course);
  }

}
