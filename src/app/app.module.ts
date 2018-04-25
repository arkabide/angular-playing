import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BookService } from './services/book.service';
import { CategoryService } from './services/category.service';
import { FacadeService } from './services/facade.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService, CategoryService, FacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
