import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackComponent } from './pack/pack/pack.component';
import { CardItemComponent } from './card/card-item/card-item.component';
import { MessageEndGameComponent } from './messages/message-end-game/message-end-game.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from './card/card-store.reducers';
import { MessageService } from './shared/messages.service';

@NgModule({
  declarations: [
    PackComponent,
    CardItemComponent,
    MessageEndGameComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({cards: cardReducer}) 
  ],
  exports: [
    PackComponent   
  ],
  providers: [MessageService]

})
export class CardsModule { }