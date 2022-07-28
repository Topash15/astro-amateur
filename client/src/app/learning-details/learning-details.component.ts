import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-details',
  templateUrl: './learning-details.component.html',
  styleUrls: ['./learning-details.component.css'],
})
export class LearningDetailsComponent implements OnInit {
  learningArticle: any;

  constructor(private route: ActivatedRoute, private service: SharedService) {}

  ngOnInit(): void {
    //retrieve article ID from params
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('articleId'));

    // find article by id
    this.getArticleById(id);
  }

  /**
   * Get all articles
   */
  private getArticleById(id: Number) {
    this.service.getArticleById(id).subscribe((data) => {
      this.learningArticle = data.result[0];
    });
  }
}
