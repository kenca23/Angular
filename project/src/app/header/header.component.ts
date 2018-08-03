import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() changePage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changedPage(recipeTab: string){
    this.changePage.emit(recipeTab
    );
  }

}
