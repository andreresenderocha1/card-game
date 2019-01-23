import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card.model';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card;
  valueOfCard: string;
  suitOfCard: string;
  path: string;

  constructor() { }

  // Construct the image of the letter according to the class received
  ngOnInit() {    
    this.valueOfCard = this.card.value;
    this.suitOfCard = this.card.suit;
    this.path = "../../../assets/imgs/card-" + this.valueOfCard + "-" + this.suitOfCard + ".svg"
  }

}
