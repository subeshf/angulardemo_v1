import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { IntroComponent } from './intro/intro.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavComponent, HomeComponent, AboutComponent, SliderComponent, IntroComponent, ProductComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
