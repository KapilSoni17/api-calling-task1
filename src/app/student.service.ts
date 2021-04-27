import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Student} from './student';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class StudentService {
  page = "home-page";
  baseURL: string = "http://daycarepanel.stage02.obdemo.com/api/v1/";
  constructor(private http: HttpClient) { }

  public getStudents(){
    let students: Student[];
    students = [
      new Student(1,'kapil'),
      new Student(2,'kapil'),
      new Student(3,'kapil')
    ]
    return students;
  }
  // getApi(page:string):Observable<any>{
  //   return this.http.get(this.baseURL+page).pipe(
  //     catchError((err: any) =>{
  //       console.log('Error in service');
  //       console.log('err');
  //       return throwError(err);
  //     })
  //   )
  // }

  getApi(){
		return this.http.get<any>(this.baseURL+this.page).pipe(map(res=>{
			return res;
		}));
	}

}
