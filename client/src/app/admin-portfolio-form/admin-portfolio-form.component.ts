import { Component, OnInit } from '@angular/core';
import { Portfolio } from './portfolio';

@Component({
  selector: 'app-admin-portfolio-form',
  templateUrl: './admin-portfolio-form.component.html',
  styleUrls: ['./admin-portfolio-form.component.css'],
})
export class AdminPortfolioFormComponent implements OnInit {
  submitted: boolean = false;
  model = new Portfolio('', '', '', '', '', '', 0, 0, '', '', '', '');


  onSubmit(form: any): void {
    // file paths
    // thumbnail='../../assets/portfolio-contents/thumbnail/' + file_name + '.thumbnail.webp'
    // hdSource = '../../assets/portfolio-contents/hd-images/' + file_name + '.webp'
    // source = '../../assets/portfolio-contents/sd-images/' + file_name + '.webp'
    const thumbnail: string = `../../assets/portfolio-contents/thumbnail/${form.controls.file_name.value}.thumbnail.webp`;
    const source: string = `../../assets/portfolio-contents/sd-images/${form.controls.file_name.value}.webp`;
    const hdSource: string = `../../assets/portfolio-contents/hd-images/${form.controls.file_name.value}.webp`;

    this.model = new Portfolio(
      form.controls.title.value,
      form.controls.date.value,
      form.controls.summary.value,
      form.controls.description.value,
      form.controls.camera.value,
      form.controls.lens.value,
      form.controls.aperture.value,
      form.controls.iso.value,
      thumbnail,
      hdSource,
      source,
      form.controls.theme.value
    );
    this.submitted = true;
  }

  // ////////DEBUG ONLY---- REMOVE---- NOT SHOWN IN DOCS ////////

  // // Reveal in html:
  // //   Name via form.controls = {{showFormControls(heroForm)}}
  // showFormControls(form: any) {
  //   return form && form.controls.title && form.controls.title.value; // Dr. IQ
  // }

  // /////////////////////////////

  constructor() {}

  ngOnInit(): void {}
}
