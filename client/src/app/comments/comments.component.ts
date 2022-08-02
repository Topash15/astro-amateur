import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from './comment';
import { SharedService } from '../shared.service';
import { convertDate } from '../utilites/helper';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[] = [];
  @Input() type: any;

  submitted: boolean = false;

  /**
   * Model comment passed into html
   * (commenter, text, date, photo_id, article_id)
   */
  model = new Comment('commenter', 'text', 'date', undefined, undefined);

  constructor(private route: ActivatedRoute, private service: SharedService) {}

  ngOnInit() {
    this.setType(this.type);
    this.model.date = convertDate(new Date(Date.now()).toJSON());
  }

  /**
   * Submits create comment form
   */
  onSubmit(): void {
    this.service.createPhotoComment(this.model).subscribe((comment) => {
      console.log(comment);
    });
    this.comments.unshift(this.model);
    this.setType(this.type);
    console.log(this.model);
    this.submitted = true;
  }

  /**
   * Sets form type to photos or articles.
   * Ensures comment gets correct id
   */
  setType(type: string): void {
    if (this.type === 'photo') {
      // retrieves portfolio Id from the current route params
      const routeParams = this.route.snapshot.paramMap;
      const id: number = Number(routeParams.get('portfolioId'));
      this.model = new Comment('', '', '', id, undefined);
    }
    if (this.type === 'article') {
      // retrieves article Id from the current route params
      const routeParams = this.route.snapshot.paramMap;
      const id: number = Number(routeParams.get('articleId'));
      this.model = new Comment('', '', '', undefined, id);
    }
  }
}