import { Component } from '@angular/core';

@Component({
  selector: 'app-author-index',
  templateUrl: './author-index.component.html',
  styleUrls: ['./author-index.component.css']
})

export class AuthorIndexComponent {
  authors = [
    {name: "first author", content: "first author's content"},
    {name: "second author", content: "second author's content"},
    {name: "second author", content: "second author's content"}
  ]
}
