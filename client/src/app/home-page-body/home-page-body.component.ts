import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-body',
  templateUrl: './home-page-body.component.html',
  styleUrls: ['./home-page-body.component.css'],
})
export class HomePageBodyComponent implements OnInit {
  photos: any[] = [
    {
      title: 'Portfolio',
      description: 'Take a look through all my work!',
      thumbnail: '../../assets/images/Crescent_moon.jpg',
      link: '#/portfolio/',
    },
    {
      title: 'About Me',
      description:
        'I am an amateur photographer who loves to take photos of things out of this world!',
      thumbnail: '../../assets/images/about-thumbnail.jpg',
      link: '#/about/',
    },
    {
      title: 'Learning',
      description:
        'As an amateur, I am constantly learning. I aim to post my learnings so that it may help others like me.',
      thumbnail: '../../assets/images/learning-thumbnail.jpg',
      link: '#/learning/',
    },
  ];
  type="home";
  constructor() {}

  ngOnInit(): void {}
}
