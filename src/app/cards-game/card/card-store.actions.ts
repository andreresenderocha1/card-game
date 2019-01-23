import {Action} from '@ngrx/store'


export class ShuffleCards implements Action{
    readonly type = 'SHUFFLE_CARDS';
    constructor(){}
}

export class ChangeStatus implements Action{
    readonly type = 'CHANGE_STATUS';
    constructor(public payload: number){}
}

export class RemoveCard implements Action{
    readonly type = 'REMOVE_CARD';
    constructor(public payload: number){}
}

export class RestartGame implements Action{
    readonly type = 'RESTART_GAME';
    constructor(){}
}

export type CardStoreActions =     
    ShuffleCards | 
    ChangeStatus | 
    RemoveCard | 
    RestartGame;