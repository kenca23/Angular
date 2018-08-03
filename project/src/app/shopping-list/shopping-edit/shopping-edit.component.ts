import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingName: ElementRef;
  @ViewChild('amountInput') ingAmount: ElementRef;
  @Output() addInfo = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddSelect(){
    const newIngredient = new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value);
    this.addInfo.emit(newIngredient);
  }

}
