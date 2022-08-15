import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.css'],
})
export class ErrorCardComponent implements OnInit {
  @Input() error: any;

  constructor() {}

  ngOnInit(): void {}

  refresh(): void {
    window.location.reload();
  };

  back(): void {
    history.back();
  }

  close(): void {
    this.error = null;
  }
}
