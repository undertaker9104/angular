import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { IdValidatorDirectiveDirective } from './id-validator-directive.directive';
import { CardValidatorDirectiveDirective } from './card-validator-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    IdValidatorDirectiveDirective,
    CardValidatorDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
