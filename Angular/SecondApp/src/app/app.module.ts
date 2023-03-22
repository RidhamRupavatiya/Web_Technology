import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrudApiComponent } from './crud-api/crud-api.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudApiComponent,
    AboutComponent,
    HeaderComponent,
    StudentComponent,
    StudentDetailComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
