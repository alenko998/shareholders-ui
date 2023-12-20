import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { TeamComponent } from './page/team/team.component';
import { ContactComponent } from './page/contact/contact.component';
import { HeroComponent } from './component/hero/hero.component';
import { SliderComponent } from './component/slider/slider.component';
import { AboutCompanyComponent } from './component/about-company/about-company.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    HeroComponent,
    SliderComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
