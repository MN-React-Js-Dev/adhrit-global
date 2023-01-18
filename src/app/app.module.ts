import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurPortfolioComponent } from './components/our-portfolio/our-portfolio.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { ThemeComponent } from './components/theme/theme.component';
import { OurProcessComponent } from './components/our-process/our-process.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    OurServicesComponent,
    OurPortfolioComponent,
    OurBlogComponent,
    ThemeComponent,
    OurProcessComponent,
     
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
