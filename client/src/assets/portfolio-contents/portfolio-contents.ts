export class PortfolioItem {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  camera: string;
  lens: string;
  iso: number;
  aperature: string;
  thumbnail: string;
  hdSource: string;
  source: string;
  link: string;
  date: Date;
  group: string;
  tags: string[];
  exposureTime: number;

  constructor(
    id: number,
    title: string,
    description: string,
    source: string,
    thumbnail: string,
    hdSource: string,
    link: '',
    group: '',
    tags: [],
    date: string,
    camera: '',
    lens: '',
    iso: 0,
    aperature: '',
    exposureTime: 0,
    detailedDescription?: string
  ) {
    this.id = id;
    this.title = title;
    this.source = source;
    this.thumbnail = thumbnail;
    this.hdSource = hdSource;
    this.description = description;
    this.link = link;
    this.group = group;
    this.tags = tags;
    if (date) {
      this.date = new Date(date);
    } else {
      this.date = new Date();
    }
    this.camera = camera;
    this.lens = lens;
    this.aperature = aperature;
    this.iso = iso;
    this.exposureTime = exposureTime;
    this.detailedDescription = detailedDescription;
  }
}

export const portfolioGroups: string[] = ['Rocket, Moon'];

export const portfolioContent: PortfolioItem[] = [
  {
    id: 1,
    title: 'Strawberry Full Moon',
    description:
      'Shot in the early hours. This was my first full moon shot with a DSLR.',
    detailedDescription:
      "As I didn't yet have a tripod, I was using the roof of my car as a support. This was as clear of a photo that I could get.",
    thumbnail:
      '../../assets/portfolio-contents/thumbnail/full-moon-6-14-22.jpg',
    source: '../../assets/portfolio-contents/sd-images/full-moon-6-14-22.jpg',
    hdSource: '../../assets/portfolio-contents/hd-images/full-moon-6-14-22.jpg',
    link: '',
    group: 'Moon',
    tags: ['moon', 'full'],
    date: new Date(2022, 5, 14),
    camera: 'Canon EOS 550D',
    lens: 'Canon EFS 55-250mm F/4.0 set to 171mm',
    iso: 400,
    aperature: 'F/16',
    exposureTime: 1 / 160,
  },
  {
    id: 2,
    title: 'Full Moon Behind the Branches',
    description:
      'Taken the day after the Strawberry Moon, this was easily the best photo of the moon that I had ever taken at the time.',
    thumbnail:
      '../../assets/portfolio-contents/thumbnail/full-moon-behind-branches.jpg',
    source:
      '../../assets/portfolio-contents/sd-images/full-moon-behind-branches.jpg',
    hdSource:
      '../../assets/portfolio-contents/hd-images/full-moon-behind-branches.png',
    link: '',
    group: 'Moon',
    tags: ['moon', 'full'],
    date: new Date(2022, 5, 15),
    camera: 'Canon EOS 550D',
    lens: 'Canon EFS 55-250mm F/4.0 set to 250mm',
    iso: 200,
    aperature: 'F/5.6',
    exposureTime: 1 / 400,
  },
  {
    id: 7,
    title: 'The Almost Supermoon',
    description: 'At 96% full, this was taken 2 days before a supermoon.',
    thumbnail:
      '../../assets/portfolio-contents/thumbnail/almost-super-moon.jpg',
    source: '../../assets/portfolio-contents/sd-images/almost-super-moon.jpg',
    hdSource: '../../assets/portfolio-contents/hd-images/almost-super-moon.png',
    link: '',
    group: 'Moon',
    tags: ['supermoon', 'moon', 'full'],
    date: new Date(2022, 6, 11),
    camera: 'Canon EOS 550D',
    lens: 'Opteka 500mm F/8 Telephoto Lens with 2x Teleconverter',
    iso: 100,
    aperature: 'F/16',
    exposureTime: 1 / 20,
  },
  {
    id: 9,
    title: 'Cratered Half Moon',
    description: 'A half moon showing many craters along the lit border.',
    detailedDescription:
      'While editing this I realized that I need to stick with a much lower ISO and longer shutterspeed. As you can tell, there is a lot of noise that made editing quite difficult.',
    thumbnail: '../../assets/portfolio-contents/thumbnail/half-moon.jpg',
    source: '../../assets/portfolio-contents/sd-images/half-moon.jpg',
    hdSource: '../../assets/portfolio-contents/hd-images/half-moon.png',
    link: '',
    group: 'Moon',
    tags: ['moon', 'half'],
    date: new Date(2022, 6, 6),
    camera: 'Canon EOS 550D',
    lens: 'Opteka 500mm F/8 Telephoto Lens',
    iso: 3200,
    aperature: 'F/8',
    exposureTime: 1 / 100,
  },
  {
    id: 10,
    title: 'Crescent Moon',
    description: 'A small sliver of a crescent moon.',
    thumbnail: '../../assets/portfolio-contents/thumbnail/crescent-moon.jpg',
    source: '../../assets/portfolio-contents/sd-images/crescent-moon.jpg',
    hdSource: '../../assets/portfolio-contents/hd-images/crescent-moon.png',
    link: '',
    group: 'Moon',
    tags: ['moon', 'crescent'],
    date: new Date(2022, 5, 26),
    camera: 'Canon EOS 550D',
    lens: 'Opteka 500mm F/8 Telephoto Lens',
    iso: 100,
    aperature: 'F/8',
    exposureTime: 0.6,
  },
  {
    id: 11,
    title: 'Waning Gibbous Moon',
    description: 'A waning gibbous moon showing off the large lunar seas.',
    thumbnail: '../../assets/portfolio-contents/thumbnail/waning-gibbous.jpg',
    source: '../../assets/portfolio-contents/sd-images/waning-gibbous.jpg',
    hdSource: '../../assets/portfolio-contents/hd-images/waning-gibbous.png',
    link: '',
    group: 'Moon',
    tags: ['moon', 'crescent'],
    date: new Date(2022, 5, 19),
    camera: 'Canon EOS 550D',
    lens: 'Canon EFS 55-250mm F/4.0 set to 208mm',
    iso: 100,
    aperature: 'F/5.6',
    exposureTime: 1/60,
  },
  {
    id: 12,
    title: 'Super Buck Moon',
    description: 'July\'s supermoon taken shortly before moonset.',
    thumbnail: '../../assets/portfolio-contents/thumbnail/super-buck-moon.webp',
    source: '../../assets/portfolio-contents/sd-images/super-buck-moon.webp',
    hdSource: '../../assets/portfolio-contents/hd-images/super-buck-moon.png',
    link: '',
    group: 'Moon',
    tags: ['moon', 'full', 'super', 'buck'],
    date: new Date(2022, 6, 14),
    camera: 'Canon EOS 550D',
    lens: 'Opteka 500mm F/8 Telephoto Lens',
    iso: 100,
    aperature: 'F/8',
    exposureTime: 1/30,
  },
  {
    id: 13,
    title: 'Super Buck Moon at Sunrise',
    description: 'July\'s supermoon viewed alongside the colorful sunrise clouds.',
    thumbnail: '../../assets/portfolio-contents/thumbnail/super-moon-sunrise.webp',
    source: '../../assets/portfolio-contents/sd-images/super-moon-sunrise.webp',
    hdSource: '../../assets/portfolio-contents/hd-images/super-moon-sunrise.png',
    link: '',
    group: 'Moon',
    tags: ['moon', 'super', 'full', 'buck', 'sunrise', 'landscape'],
    date: new Date(2022, 6, 14),
    camera: 'Canon EOS 550D',
    lens: 'Canon EFS 55-250mm F/4.0 set to 55mm',
    iso: 100,
    aperature: 'F/5.6',
    exposureTime: 1/25,
  },
  {
    id: 3,
    title: 'Falcon 9 Vents Liquid Oxygen',
    description:
      'Falcon 9 venting liquid oxygen shortly before takeoff. This is a normal part of the launch process.',
    thumbnail:
      '../../assets/portfolio-contents/thumbnail/falcon-9-venting-lo2.jpg',
    source:
      '../../assets/portfolio-contents/sd-images/falcon-9-venting-lo2.jpg',
    hdSource:
      '../../assets/portfolio-contents/hd-images/falcon-9-venting-lo2.png',
    link: '',
    group: 'Rocket',
    tags: ['spacex', 'falcon9', 'venting', 'SES'],
    date: new Date(2022, 5, 29),
    camera: 'Canon EOS 550D',
    lens: 'Opteka 500mm F/8 Telephoto Lens',
    iso: 640,
    aperature: 'F/8',
    exposureTime: 1 / 2000,
  },
  {
    id: 4,
    title: 'Falcon 9 T-0',
    description: 'Falcon 9 upon engine ignition.',
    thumbnail:
      '../../assets/portfolio-contents/thumbnail/Falcon-9-T-Minus-0.jpg',
    source: '../../assets/portfolio-contents/sd-images/Falcon-9-T-Minus-0.jpg',
    hdSource:
      '../../assets/portfolio-contents/hd-images/Falcon-9-T-Minus-0.png',
    link: '',
    group: 'Rocket',
    tags: ['spacex', 'falcon9', 'liftoff', 'SES'],
    date: new Date(2022, 5, 29),
    camera: 'Canon EOS 550D',
    lens: 'Canon EFS 55-250mm F/4.0 set to 250mm',
    iso: 800,
    aperature: 'F/8.0',
    exposureTime: 1 / 2000,
  },
  {
    id: 5,
    title: 'Falcon 9 Clears the Tower',
    description:
      'Falcon 9 rocket clearing its launch tower as ice sublimates off the booster.',
    thumbnail:
      '../../assets/portfolio-contents/thumbnail/lift-off-between-two-heads.jpg',
    source:
      '../../assets/portfolio-contents/sd-images/lift-off-between-two-heads.jpg',
    hdSource:
      '../../assets/portfolio-contents/hd-images/lift-off-between-two-heads.png',
    link: '',
    group: 'Rocket',
    tags: ['spacex', 'falcon9', 'liftoff', 'SES'],
    date: new Date(2022, 5, 29),
    camera: 'Canon EOS 550D',
    lens: 'Opteka 500mm F/8 Telephoto Lens',
    iso: 2500,
    aperature: 'F/8',
    exposureTime: 1 / 4000,
  },
  {
    id: 6,
    title: 'Falcon 9 Mid Flight',
    description: 'Falcon 9 in mid flight.',
    thumbnail:
      '../../assets/portfolio-contents/thumbnail/falcon-9-mid-flight.jpg',
    source: '../../assets/portfolio-contents/sd-images/falcon-9-mid-flight.jpg',
    hdSource:
      '../../assets/portfolio-contents/hd-images/falcon-9-mid-flight.png',
    link: '',
    group: 'Rocket',
    tags: ['spacex', 'falcon9', 'flying', 'SES'],
    date: new Date(2022, 5, 29),
    camera: 'Canon EOS 550D',
    lens: 'Opteka 500mm F/8 Telephoto Lens',
    iso: 1600,
    aperature: 'F/8',
    exposureTime: 1 / 4000,
  },
  {
    id: 8,
    title: 'Falcon in the bushes',
    description: 'A falcon 9 on the pad framed perfectly by the bushes.',
    thumbnail:
      '../../assets/portfolio-contents/thumbnail/nature-vs-technology.jpg',
    source:
      '../../assets/portfolio-contents/sd-images/nature-vs-technology.jpg',
    hdSource:
      '../../assets/portfolio-contents/hd-images/nature-vs-technology.png',
    link: '',
    group: 'Rocket',
    tags: ['spacex', 'falcon9', 'pad', 'SES'],
    date: new Date(2022, 5, 29),
    camera: 'Canon EOS 550D',
    lens: 'Canon EFS 55-250mm F/4.0 set to 250mm',
    iso: 800,
    aperature: 'F/8',
    exposureTime: 1 / 2000,
  },
];
