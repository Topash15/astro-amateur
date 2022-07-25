import { Component, OnInit } from '@angular/core';
import {
  PortfolioItem,
  portfolioContent,
} from '../../assets/portfolio-contents/portfolio-contents';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css'],
})
export class PortfolioDetailsComponent implements OnInit {
  portfolioItem: PortfolioItem | undefined;
  sourcePrefix: string;
  trimmedDate: string | undefined;

  constructor(private route: ActivatedRoute) {
    this.sourcePrefix = '../../assets/portfolio-contents/';
    this.trimmedDate = '';
  }

  ngOnInit(): void {
    // retrieves portfolio Id from the current route params
    const routeParams = this.route.snapshot.paramMap;
    const portfolioId = Number(routeParams.get('portfolioId'));

    // finds the portfolio item based on the id
    this.portfolioItem = portfolioContent.find(
      (item) => item.id === portfolioId
    );

    const trimmedDate: string | undefined = this.portfolioItem?.date.toDateString();
    this.trimmedDate = trimmedDate;
  }
}
