import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    // first step is create your component then come here and regigister it. If u ng g c then it will be automatic.
    //second step is to register your component by adding it here. Third step go to app.component.HTML 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    AuthorsService
    // after generating a service component you come here and register it. Then go to the service component
    // this is dependancy injection from course component in the constructor section
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
