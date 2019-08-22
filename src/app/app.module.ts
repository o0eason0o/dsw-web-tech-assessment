import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './topMenu/topMenu.component';
import { MainAppComponent } from './mainApp/mainApp.component';
import { ProductBoxComponent } from './productBox/productBox.component';
import { AdsComponent } from './ads/ads.component';
import { PagesComponent } from './pages/pages.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent, 
    TopMenuComponent,
    MainAppComponent,
    ProductBoxComponent,
    AdsComponent,
    PagesComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
