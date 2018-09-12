import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material'

import { AppComponent } from './app.component';
import { AuthorCreateComponent } from './authors/author-create/author-create.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorIndexComponent } from './authors/author-index/author-index.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    AuthorIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
