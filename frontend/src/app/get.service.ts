import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IModel } from './model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GetService {

  private _url: string = "http://127.0.0.1:8000/track/";

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<IModel[]> {
    return this.http.get<IModel[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
  postExpenses(model): any {
    return this.http.post<IModel[]>(this._url, model)
    .pipe(catchError(this.errorHandler));
  }
  updateExpenses(id,model): any {
    return this.http.put<IModel[]>(this._url+id, model)
    .pipe(catchError(this.errorHandler));
  }
  deleteExpenses(id): any {
    return this.http.delete(this._url+id)
  }

}
