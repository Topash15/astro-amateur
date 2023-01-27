export class Portfolio {
  title: string;
  date: string;
  summary: string;
  description: string;
  camera: string;
  lens: string;
  aperture: number;
  exposure: number;
  thumbnail: string;
  hdSource: string;
  source: string;
  constructor(
    title: string,
    date: string,
    summary: string,
    description: string,
    camera: string,
    lens: string,
    aperture: number,
    exposure: number,
    thumbnail: string,
    hdSource: string,
    source: string
  ){
    this.title = title;
    this.date = date;
    this.summary = summary;
    this.description = description;
    this.camera = camera;
    this.lens = lens;
    this.aperture = aperture;
    this.exposure = exposure;
    this.thumbnail = thumbnail;
    this.hdSource = hdSource;
    this.source = source;
  }
}

export class Learning {
  title: string;
  date: string;
  summary: string;
  body: string;
  constructor(
    title:string,
    date: string,
    summary: string,
    body: string
  ){
    this.title=title;
    this.date=date;
    this.summary=summary;
    this.body=body;
  }
}