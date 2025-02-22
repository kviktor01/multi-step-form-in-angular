import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';

@NgModule({
  declarations: [AppComponent, MultiStepFormComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
