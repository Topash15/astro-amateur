import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linking-card',
  templateUrl: './linking-card.component.html',
  styleUrls: ['./linking-card.component.css'],
})
export class LinkingCardComponent implements OnInit {

  @Input() photos: any;
  @Input() type: any;

  constructor() {}

  ngOnInit(): void {
  }
}
