import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/CourseService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  courses: any[] | undefined;
  selectedCourse = {
    modules: [],
    id: undefined
  };

  ngOnInit(): void {
  this.courseService.findAllCourses()
  .then(courses => this.courses = courses)
  }

  selectCourse(course: any){
    this.selectedCourse = course;
  }
  
}