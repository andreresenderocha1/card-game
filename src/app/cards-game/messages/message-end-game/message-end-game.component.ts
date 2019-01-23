import * as CardStoreActions from '../../card/card-store.actions'
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from '../../card/card.model';
import { MessageService } from '../../shared/messages.service';

@Component({
  selector: 'app-message-end-game',
  templateUrl: './message-end-game.component.html',
  styleUrls: ['./message-end-game.component.css']
})
export class MessageEndGameComponent implements OnInit {

  constructor(private store: Store<{cards: {cards: Card[]}}>,
              private messageService: MessageService) { }

  ngOnInit() {
  }
  
  
  restartGame(){
    // Remove game over message
    this.messageService.endGameEmitter.next(false);
    // Reload the array of cards
    this.store.dispatch(new CardStoreActions.RestartGame())
    // Enable buttons
    this.messageService.enableButton();
  }

}
