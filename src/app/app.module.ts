import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {appRouting} from './app.routing';
import { AutocompleteModule } from 'ng2-input-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    appRouting,
    AutocompleteModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
