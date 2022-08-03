import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
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
    this.service.getArticleById(id).subscribe((data) => {
      this.learningArticle = data.result[0];
      this.learningArticle.date = convertDate(this.learningArticle.date);
    });
  }

  /**
   * Get all comments for this article id
   */
  private getArticleComments(id: number) {
    this.service.getArticleComments(id).subscribe((data) => {
      this.comments = data.results;

      // loop through comments and edit the date format for use in comment component
      for (let i = 0; i < this.comments.length; i++) {
        let comment = this.comments[i];
        comment.date = convertDate(comment.date);
      }
    });
  }
}
