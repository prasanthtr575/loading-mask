import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingMaskComponent } from './components/loading-mask/loading-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingMaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
