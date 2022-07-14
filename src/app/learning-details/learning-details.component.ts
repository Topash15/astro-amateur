import { Component, OnInit } from '@angular/core';
import {
  LearningContentObject,
  learningContent,
} from '../../assets/learning-contents/learning-contents';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learning-details',
  templateUrl: './learning-details.component.html',
  styleUrls: ['./learning-details.component.css'],
})
export class LearningDetailsComponent implements OnInit {
  learningArticle: LearningContentObject | undefined;
  trimmedDate: string | undefined;

  constructor(private route: ActivatedRoute) {
    this.trimmedDate = '';
  }

  ngOnInit(): void {
    //retrieve article ID from params
    const routeParams = this.route.snapshot.paramMap;
    const articleId = Number(routeParams.get('articleId'));

    // find article by id
    this.learningArticle = learningContent.find(
      (article) => article.id === articleId
    );

    const trimmedDate: string | undefined = this.learningArticle?.date.toDateString();
    this.trimmedDate = trimmedDate;
  }
}
