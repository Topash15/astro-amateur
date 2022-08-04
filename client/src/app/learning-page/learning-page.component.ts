import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.css'],
})
export class LearningPageComponent implements OnInit {
  articles: any[] = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  /**
   * Get all articles
   */
  private getArticles() {
    this.service
      .getArticles()
      .subscribe((data) => (this.articles = data.results));
  }
}
