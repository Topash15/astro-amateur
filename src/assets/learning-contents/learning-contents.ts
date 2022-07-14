export class photo {
  source: string;
  description: string;

  constructor(source: string, description: string) {
    this.source = source;
    this.description = description;
  }
}

export class link {
  source: string;
  text?: string;

  constructor(source: string, text?: string) {
    this.source = source;
    this.text = text;
  }
}

export class LearningContentObject {
  id: number;
  date: Date;
  title: string;
  summary: string;
  body: string;
  articles?: link[];
  photos?: photo[];

  constructor(
    id: number,
    date: Date,
    title: string,
    summary: string,
    body: string,
    articles?: link[],
    photos?: photo[]
  ) {
    this.id = id;
    this.date = new Date(date);
    this.title = title;
    this.summary = summary;
    this.body = body;
    this.articles = articles;
    this.photos = photos;
  }
}

export const learningContent: LearningContentObject[] = [
  {
    id: 1,
    date: new Date(2022, 6, 12),
    title: 'Editing Moon Photos',
    summary:
      'Some simple tips to edit your photos of the moon and take them to the next level.',
    body: 'This article gives a great guide to make your moon photos pop. It focuses on using Lightroom, but I was able to follow along with a free alternative, RawTherapee. The main points that I took out of the article are as follows. Set the white balance using a dropper tool. For RawTherapee, this tool is next to the hand towards the top right. You want to click your dropper within the lunar seas. Then, overexpose in your editor. The goal is to almost completely white, but you should still be able to make out the lunar seas. Then, decrease the contrast. This is where the detail pops out at you. At this point, you can also play around with the black levels to get additional detail. Finally add some saturation to make those lunar seas pop. The seas do have a slight blue tinge that you can bring out with some saturation. Go ahead and crop, then add your photo to the queue because you are done!',
    articles: [
      {
        source:
          'https://digital-photography-school.com/lightroom-moon-editing-tips-for-awesome-moon-photos/'
      },
    ],
    photos: [
      {
        source: '../../assets/images/before-after.webp',
        description: 'Example of before and after using this editing technique',
      },
    ],
  },
  {
    id: 2,
    date: new Date(2022, 6, 12),
    title: 'A Quick Review of My Gear',
    summary: 'What I like and what I don\'t like about the gear that I have.',
    body: '',
    articles: [],
    photos: [],
  },
];
