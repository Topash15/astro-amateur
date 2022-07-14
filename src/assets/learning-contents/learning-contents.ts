export class LearningContentObject {
  id: number;
  date: Date;
  title: string;
  summary: string;
  body: string;
  articles?: string[];
  photos?: string[];

  constructor(
    id: number,
    date: Date,
    title: string,
    summary: string,
    body: string,
    articles?: string[],
    photos?: string[]
  ) {
    this.id = id;
    this.date= new Date(date);
    this.title= title;
    this.summary= summary;
    this.body= body;
    this.articles= articles;
    this.photos= photos;
  }
}

export const learningContent: LearningContentObject[] = [
  {
    id: 1,
    date: new Date(2022, 7, 12),
    title: "Editing Moon Photos",
    summary: "Some simple tips to edit your photos of the moon and take them to the next level.",
    body: "This article gives a great guide to make your moon photos pop. It focuses on using Lightroom, but I was able to follow along with a free alternative, RawTherapee.",
    articles: ["https://digital-photography-school.com/lightroom-moon-editing-tips-for-awesome-moon-photos/"],
    photos: []
},
{
  id: 2,
  date: new Date(2022, 7, 12),
  title: "Second Example Article",
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  body: "This article gives a great guide to make your moon photos pop. It focuses on using Lightroom, but I was able to follow along with a free alternative, RawTherapee.",
  articles: ["https://digital-photography-school.com/lightroom-moon-editing-tips-for-awesome-moon-photos/"],
  photos: []
},
]