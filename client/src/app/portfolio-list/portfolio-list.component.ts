import { Component, OnInit } from '@angular/core';
import {portfolioContent, PortfolioItem, portfolioGroups} from '../../assets/portfolio-contents/portfolio-contents';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  photos: PortfolioItem[] = portfolioContent;
  groups: string[] = portfolioGroups;
  type: string = 'portfolio';

  constructor(
    private server: ServerService
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  private getPhotos(){
    this.server.getPhotos().then((response: any) => {
      console.log(response)
    })
  }

}
