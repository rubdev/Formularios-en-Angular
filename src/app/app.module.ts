import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { FormDataComponent } from './components/form-data/form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
