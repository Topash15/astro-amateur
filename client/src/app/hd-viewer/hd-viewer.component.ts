import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hd-viewer',
  templateUrl: './hd-viewer.component.html',
  styleUrls: ['./hd-viewer.component.css'],
})
export class HdViewerComponent implements OnInit {
  @Input() portfolioItem: any;
  @Input() sourcePrefix: any;
  @Output() viewerIsHidden = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Returns false
   * Used to close the HDviewer
   */
  hideViewer(): void {
    this.viewerIsHidden.emit(false);
  }
}
