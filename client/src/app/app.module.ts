import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageBodyComponent } from './home-page-body/home-page-body.component';
import { LinkingCardComponent } from './linking-card/linking-card.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { LearningPageComponent } from './learning-page/learning-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LearningDetailsComponent } from './learning-details/learning-details.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { ErrorCardComponent } from './error-card/error-card.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageBodyComponent,
    LinkingCardComponent,
    PortfolioListComponent,
    PortfolioDetailsComponent,
    LearningPageComponent,
    AboutPageComponent,
    LearningDetailsComponent,
    CommentsComponent,
    LoginComponent,
    ErrorCardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomePageBodyComponent },
      { path: 'portfolio', component: PortfolioListComponent },
      { path: 'portfolio/:portfolioId', component: PortfolioDetailsComponent},
      { path: 'learning', component: LearningPageComponent},
      { path: 'about', component: AboutPageComponent},
      { path: 'learning/:articleId', component: LearningDetailsComponent}
    ]),
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    SharedService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
