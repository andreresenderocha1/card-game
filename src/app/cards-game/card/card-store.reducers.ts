import * as CardStoreActions from './card-store.actions';
import { Card } from './card.model';
import { enumSuits, enumValues } from '../shared/enums';


const initialState = {
    cards: [
        new Card(enumValues.As,enumSuits.Club,false),
        new Card(enumValues.Two,enumSuits.Club,false),
        new Card(enumValues.Tree,enumSuits.Club,false),
        new Card(enumValues.Four,enumSuits.Club,false),
        new Card(enumValues.Five,enumSuits.Club,false),
        new Card(enumValues.Six,enumSuits.Club,false),
        new Card(enumValues.Seven,enumSuits.Club,false),
        new Card(enumValues.Eight,enumSuits.Club,false),
        new Card(enumValues.Nine,enumSuits.Club,false),
        new Card(enumValues.Ten,enumSuits.Club,false),
        new Card(enumValues.Jack,enumSuits.Club,false),
        new Card(enumValues.Queen,enumSuits.Club,false),
        new Card(enumValues.King,enumSuits.Club,false),
        
        new Card(enumValues.As,enumSuits.Diamond,false),
        new Card(enumValues.Two,enumSuits.Diamond,false),
        new Card(enumValues.Tree,enumSuits.Diamond,false),
        new Card(enumValues.Four,enumSuits.Diamond,false),
        new Card(enumValues.Five,enumSuits.Diamond,false),
        new Card(enumValues.Six,enumSuits.Diamond,false),
        new Card(enumValues.Seven,enumSuits.Diamond,false),
        new Card(enumValues.Eight,enumSuits.Diamond,false),
        new Card(enumValues.Nine,enumSuits.Diamond,false),
        new Card(enumValues.Ten,enumSuits.Diamond,false),
        new Card(enumValues.Jack,enumSuits.Diamond,false),
        new Card(enumValues.Queen,enumSuits.Diamond,false),
        new Card(enumValues.King,enumSuits.Diamond,false),
    
        new Card(enumValues.As,enumSuits.Spade,false),
        new Card(enumValues.Two,enumSuits.Spade,false),
        new Card(enumValues.Tree,enumSuits.Spade,false),
        new Card(enumValues.Four,enumSuits.Spade,false),
        new Card(enumValues.Five,enumSuits.Spade,false),
        new Card(enumValues.Six,enumSuits.Spade,false),
        new Card(enumValues.Seven,enumSuits.Spade,false),
        new Card(enumValues.Eight,enumSuits.Spade,false),
        new Card(enumValues.Nine,enumSuits.Spade,false),
        new Card(enumValues.Ten,enumSuits.Spade,false),
        new Card(enumValues.Jack,enumSuits.Spade,false),
        new Card(enumValues.Queen,enumSuits.Spade,false),
        new Card(enumValues.King,enumSuits.Spade,false),

        new Card(enumValues.As,enumSuits.Heart,false),
        new Card(enumValues.Two,enumSuits.Heart,false),
        new Card(enumValues.Tree,enumSuits.Heart,false),
        new Card(enumValues.Four,enumSuits.Heart,false),
        new Card(enumValues.Five,enumSuits.Heart,false),
        new Card(enumValues.Six,enumSuits.Heart,false),
        new Card(enumValues.Seven,enumSuits.Heart,false),
        new Card(enumValues.Eight,enumSuits.Heart,false),
        new Card(enumValues.Nine,enumSuits.Heart,false),
        new Card(enumValues.Ten,enumSuits.Heart,false),
        new Card(enumValues.Jack,enumSuits.Heart,false),
        new Card(enumValues.Queen,enumSuits.Heart,false),
        new Card(enumValues.King,enumSuits.Heart,false)
    ],    
}

export function cardReducer(state = initialState, action: CardStoreActions.CardStoreActions){
    switch(action.type){        
        case 'SHUFFLE_CARDS':
            let cardsArray = state.cards;           
            let j, x, i;
            for (i = cardsArray.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));        
                x = cardsArray[i];
                cardsArray[i] = cardsArray[j];
                cardsArray[j] = x;
            }                       
            return{
                ...state,
                cards: [...cardsArray]
            }
        case 'CHANGE_STATUS':             
            state.cards[action.payload].selected = true;            
            return{
                ...state                
            }
        case 'REMOVE_CARD':  
            const cardsNew = state.cards.slice();            
            cardsNew.splice(action.payload ,1);                                
            return{
                ...state,
                cards: [...cardsNew]
            }
        case 'RESTART_GAME':  
            initialState.cards.forEach(
                (card)=>card.selected = false
            )
            state = initialState;                                          
            return{
                ...state                
            }
        default: 
            return state;
    }

    
}