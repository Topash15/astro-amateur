import { Component, OnInit } from '@angular/core';
import {portfolioContent, PortfolioItem, portfolioGroups} from '../../assets/portfolio-contents/portfolio-contents';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  photos: any[] = portfolioContent;
  groups: string[] = portfolioGroups;
  type: string = 'portfolio';

  constructor(
    private service: SharedService
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  private getPhotos(){
    this.service.getPhotos().subscribe(data => {
      this.photos = data.results;
    })
  }
}
