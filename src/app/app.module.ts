import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './Components/interface/interface.component';
import { QuestionsComponent } from './Components/questions/questions.component';
import { GetDataService } from './Services/get-data.service';
import { ChartsComponent } from './Components/charts/charts.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    QuestionsComponent,
    ChartsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUsefulSwiperModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
