export class Comment {
    commenter: string;
    text: string;
    date: string;
    photo_id: number | undefined;
    article_id: number | undefined;
    constructor(
      commenter: string,
      text: string,
      date: string,
      photo_id?: number,
      article_id?: number
    ) {
      this.commenter = commenter;
      this.text = text;
      this.date = date;
      this.photo_id = photo_id;
      this.article_id = article_id;
    }
  }
  