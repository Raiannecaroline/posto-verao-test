import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from './carousel/carousel.module';
import { ShellBoxAboutComponent } from './shell-box-about/shell-box-about.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ShellBoxAboutComponent,
    AboutComponent,
    FooterComponent,
    GoogleMapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CarouselModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
