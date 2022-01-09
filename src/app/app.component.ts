import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  onCardClicked() {
    console.log("card clicked!");
  }

  onCourseSelected(course: Course) {
    console.log(course);
  }
}
