import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BookService } from './services/book.service';
import { CategoryService } from './services/category.service';
import { FacadeService } from './services/facade.service';
import { FormComponent } from './form/form.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService, CategoryService, FacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
