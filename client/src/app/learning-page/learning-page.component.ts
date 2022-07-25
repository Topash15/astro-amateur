import { Component, OnInit } from '@angular/core';
import { LearningContentObject, learningContent} from '../../assets/learning-contents/learning-contents';

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.css']
})
export class LearningPageComponent implements OnInit {

  articles: LearningContentObject[] = learningContent;

  constructor() { }

  ngOnInit(): void {
  }

}
