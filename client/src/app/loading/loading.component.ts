import { Component, OnInit, Input } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  title = 'angular-boilerplate';
  loading: boolean = false;

  constructor(private _loading: LoadingService) {}

  ngOnInit(): void {
    this.listToLoading();
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
