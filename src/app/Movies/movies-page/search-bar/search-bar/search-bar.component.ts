import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  public key?: string;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {
    
  }

  searchKey(){
    this.newItemEvent.emit(this.key);
  }
}