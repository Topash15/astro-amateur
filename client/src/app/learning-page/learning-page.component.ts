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
  error: any;
  loading: boolean = false;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  /**
   * Get all articles
   */
  private getArticles() {
    this.loading = true;
    this.service.getArticles().subscribe({
      next: (data) => (this.articles = data.results),
      error: (err) => {
        this.loading = false;
        this.error = err;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
