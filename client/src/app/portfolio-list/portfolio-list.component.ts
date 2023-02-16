import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared/shared.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
})
export class PortfolioListComponent implements OnInit {
  photos: any[] = [];
  type: string = 'portfolio';
  loading: boolean;
  error: any;

  constructor(private service: SharedService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  private getPhotos() {
    this.loading = true;
    this.service.getPhotos().subscribe({
      next: (data) => {
        this.photos = data.results;
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
}
