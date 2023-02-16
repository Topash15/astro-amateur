import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../_services/shared/shared.service';
import { Observable } from 'rxjs';
import { convertDate } from '../utilites/helper';

@Component({
  selector: 'app-learning-details',
  templateUrl: './learning-details.component.html',
  styleUrls: ['./learning-details.component.css'],
})
export class LearningDetailsComponent implements OnInit {
  learningArticle: any;
  comments: any[] = [];
  type: string = 'article';
  loading: boolean = false;
  error: any = undefined;
  commentsLoading: boolean = false;

  constructor(private route: ActivatedRoute, private service: SharedService) {}

  ngOnInit(): void {
    //retrieve article ID from params
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('articleId'));

    // find article by id
    this.getArticleById(id);

    // get comments
    this.getArticleComments(id);
  }

  /**
   * Get all articles
   */
  private getArticleById(id: Number) {
    this.loading = true;
    this.service.getArticleById(id).subscribe({
      next: (data) => {
        this.learningArticle = data.result[0];
        this.learningArticle.date = convertDate(this.learningArticle.date);
      },
      error: (err) => {
        this.loading = false;
        this.error = err;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  /**
   * Get all comments for this article id
   */
  private getArticleComments(id: number) {
    this.service.getArticleComments(id).subscribe({
      next: (data) => {
        console.log(this.comments);
        this.comments = data.comments;
      },
      error: (err) => {
        this.commentsLoading = false;
        this.error = err;
      },
      complete: () => {
        this.commentsLoading = false;
      },
    });
  }
}
