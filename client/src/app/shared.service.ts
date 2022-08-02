import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Comment } from './comments/comment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  /**
   * Used to get all photos in the portfolio.
   * Returns object: {results: Array[]}
   */
  getPhotos(): Observable<any> {
    return this.http.get<any>(
      `${environment.serverURL}/api/portfolio/get/photos`
    );
  }

  /**
   * Gets an individual photo by id.
   * Returns object: {result: Array[]}
   */
  getPhotoById(id: Number): Observable<any> {
    return this.http.get<any>(
      `${environment.serverURL}/api/portfolio/get/photo/${id}`
    );
  }

  /**
   * Gets all comments by photo id
   * Returns object: {results: Array[]}
   */
  getPhotoComments(id: number): Observable<any> {
    return this.http.get<any>(
      `${environment.serverURL}/api/comments/get/comments/photo/${id}`
    );
  }

  /**
   * Creates new comment on photo
   */
  createPhotoComment(form: Comment): Observable<any> {
    console.log("creating new comment")
    console.log(JSON.stringify(form))
    return this.http.post<any>(
      `${environment.serverURL}/api/comments/post/comments`, JSON.stringify(form), {headers: {'Content-Type': 'application/json'}}
    );
  }

  /**
   * Gets all learning articles.
   * Returns object: {results: Array[]}
   */
  getArticles(): Observable<any> {
    return this.http.get<any>(
      `${environment.serverURL}/api/learning/get/articles`
    );
  }

  /**
   * Gets single learning article by id.
   * Returns object: {result: Array[]}
   */
  getArticleById(id: Number): Observable<any> {
    return this.http.get<any>(
      `${environment.serverURL}/api/learning/get/article/${id}`
    );
  }

  /**
   * Gets all comments by article id
   * Returns object: {results: Array[]}
   */
  getArticleComments(id: number): Observable<any> {
    return this.http.get<any>(
      `${environment.serverURL}/api/comments/get/comments/article/${id}`
    );
  }
}
