import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
//for angular to see it we have to import it. Thats why we say import in the beginning of it.

@Component({
    //declarator function
    selector: 'courses',
    template: `
        <h2>{{ title }}<h2>
        <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
        </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    // getTitle() {
    //     //this is a method
    //     return this.title;

    // }
    // Logic for calling an HTTP service

}
// after this the second step is to register this component in a module so we go to the app.modules.ts and add it there