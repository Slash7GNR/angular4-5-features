import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AsKeywordComponent } from './as-keyword/as-keyword.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PreserveWhitespacesComponent } from './preserve-whitespaces/preserve-whitespaces.component';

@NgModule({
  declarations: [
    AppComponent,
    AsKeywordComponent,
    SimpleFormComponent,
    PreserveWhitespacesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
