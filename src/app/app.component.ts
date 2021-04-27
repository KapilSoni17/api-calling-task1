import { Component } from '@angular/core';
import{Student} from './student'
import { StudentService } from './student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService],
})
export class AppComponent {
  title = 'taskapi';
  page:string ="home-page";
  response:string | undefined;
  students : Student[] | undefined;
  dataset = [];
  block = [];
  
  constructor(private studentService: StudentService) {
  }
getStudents(){
  this.students = this.studentService.getStudents();

}

getApi(){
  this.studentService.getApi().subscribe((resp)=>{
    console.warn(resp);
    this.dataset=resp?.blocks;
  }
  )
}



}
