import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GachaComponent } from './gacha/gacha.component';
import { DonateFormComponent } from './donate-form/donate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GachaComponent,
    DonateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
