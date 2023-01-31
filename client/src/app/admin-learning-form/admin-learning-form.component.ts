import { Component, OnInit } from '@angular/core';
import { Learning } from './learning';

@Component({
  selector: 'app-admin-learning-form',
  templateUrl: './admin-learning-form.component.html',
  styleUrls: ['./admin-learning-form.component.css']
})
export class AdminLearningFormComponent implements OnInit {
  submitted: boolean = false;
  model: Learning = new Learning ('','','','')

  onSubmit(form: any): void {

    this.model = new Learning(
      form.controls.learningTitle.value,
      form.controls.learningDate.value,
      form.controls.learningSummary.value,
      form.controls.learningBody.value
    )
      console.log(this.model);
    this.submitted = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
