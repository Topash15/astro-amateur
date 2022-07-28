import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css'],
})
export class PortfolioDetailsComponent implements OnInit {
  portfolioItem: any;
  sourcePrefix: string;

  constructor(
    private route: ActivatedRoute, 
    private service: SharedService
    ) {
    this.sourcePrefix = '../../assets/portfolio-contents/';
  }

  ngOnInit(): void {
    // retrieves portfolio Id from the current route params
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('portfolioId'));

    // finds the portfolio item based on the id
    this.getPhoto(id);
  }

  /**
   * Retreives photo by id provided in the route params
   */
  private getPhoto(id: Number) {
    this.service.getPhotoById(id).subscribe((data) => {
      this.portfolioItem = data.result[0];
    });
  }
}
