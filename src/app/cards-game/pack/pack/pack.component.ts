import * as CardStoreActions from '../../card/card-store.actions'

import { Component, OnInit } from '@angular/core';
import { Card } from '../../card/card.model';
import { Subject, Observable } from 'rxjs';
import { Store, State } from '@ngrx/store';
import { MessageService } from '../../shared/messages.service';


// Container with all cards in the deck

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent  implements OnInit{
  cardsState: Observable<{cards: Card[]}>;
  cards: Card[] = [];
  cardsExcluded: Card[];
  cardsSelected: Subject<Card[]>;
  flagDisableButton = false;
  flagEndGame = false;
  
  constructor(private store: Store<{cards: {cards: Card[]}}>,
              private messageService:MessageService) { }

  ngOnInit(){ 
    // Listen for changes in state and assigns the new values to array(this.cards)   
    this.store.select('cards').subscribe(
      (state)=>{
        this.cards = state.cards
      }
    );    
    // Listen to the end of the game to display end-of-game message
    this.messageService.endGameEmitter
      .subscribe(
        (endGame: boolean)=>{
         this.flagEndGame = endGame;
        }
      )         
    // Listen to enable or disable buttons
    this.messageService.disableButtonEmitter
      .subscribe(
        (buttonState: boolean)=>{
          this.flagDisableButton = buttonState
        }
      )    
  }

  shuffleCards(){   
    this.store.dispatch(new CardStoreActions.ShuffleCards());   
  }
  // Choose a random number (the index to remove), change the 
  // status of the card to selected and remove the card from state
  getOneCard(){
    let cardGettedIndex = Math.floor(Math.random() * (this.cards.length))
    this.store.dispatch(new CardStoreActions.ChangeStatus(cardGettedIndex))
    this.flagDisableButton = true;
    setTimeout( ()=>{           
        this.store.dispatch(new CardStoreActions.RemoveCard(cardGettedIndex))
        this.flagDisableButton = false;   
        if(this.cards.length == 0){
          this.messageService.endGame();
          this.flagDisableButton = true;
        }     
    },2500); 
  }
}







 
