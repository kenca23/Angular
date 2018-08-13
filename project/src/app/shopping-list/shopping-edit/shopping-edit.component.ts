import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingName: ElementRef;
  @ViewChild('amountInput') ingAmount: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddSelect(){
    const newIngredient = new Ingredient(this.ingName.nativeElement.value, Number(this.ingAmount.nativeElement.value));
    this.slService.addIngredient(newIngredient)
  }

}
