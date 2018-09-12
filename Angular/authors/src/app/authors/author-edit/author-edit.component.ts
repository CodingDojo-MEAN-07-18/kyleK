import { Component } from '@angular/core';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent {
  enteredValue = '';
  editAuthor = '';


  onEditAuthor() {
    this.editAuthor = this.enteredValue;
  }
}
