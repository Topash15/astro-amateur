import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared/shared.service';
import { ActivatedRoute } from '@angular/router';

export type EditorType = 'portfolio' | 'learning';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  submitted: boolean = false;
  editor: EditorType = "portfolio";

  constructor(private route: ActivatedRoute, private service: SharedService) { }

  ngOnInit(): void {
  }

  /**
   * Displays Portfolio form
   */
  get showPortfolioForm(){
    return this.editor === "portfolio";
  }

   /**
   * Displays Learning form
   */
   get showLearningForm(){
    return this.editor === "learning";
  }

  /**
   * Switches between forms
   */
  toggleEditor(type: EditorType){
    this.editor = type
  }

  /**
   * Handles submitting forms
   */
  onSubmit(form:any):void {

    console.log(form);
    console.log(this);

    // if portfolio
    // this.service.createPhoto(this.model).subscribe();

      this.submitted = true;
      // thumbnail='../../assets/portfolio-contents/thumbnail/' + file_name + '.thumbnail.webp'
      // hdSource = '../../assets/portfolio-contents/hd-images/' + file_name + '.webp'
      // source = '../../assets/portfolio-contents/sd-images/' + file_name + '.webp'
  }

}
