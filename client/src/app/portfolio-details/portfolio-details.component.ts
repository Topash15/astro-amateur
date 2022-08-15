import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { convertDate } from '../utilites/helper';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css'],
})
export class PortfolioDetailsComponent implements OnInit {
  portfolioItem: any;
  sourcePrefix: string;
  comments: any[] = [];
  type: string = 'photo';
  loading: boolean = false;
  error: any = undefined;
  commentsLoading: boolean = false;

  constructor(private route: ActivatedRoute, private service: SharedService) {
    this.sourcePrefix = '../../assets/portfolio-contents/';
  }

  ngOnInit(): void {
    // retrieves portfolio Id from the current route params
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('portfolioId'));

    // finds the portfolio item based on the id
    this.getPhoto(id);

    // finds all comments for this photoId and saves to comments
    this.getComments(id);
  }

  /**
   * Retreives photo by id provided in the route params
   */
  private getPhoto(id: Number) {
    this.loading = true;
    this.service.getPhotoById(id).subscribe({
      next: (data) => {
        this.portfolioItem = data.result[0];
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
   * Retrieves all comments related to this photo id
   */
  private getComments(id: number) {
    this.commentsLoading = true;
    this.service.getPhotoComments(id).subscribe({
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
