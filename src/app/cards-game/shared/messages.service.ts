import { Subject } from 'rxjs';

export class MessageService{
    endGameEmitter = new Subject<boolean>();
    disableButtonEmitter = new Subject<boolean>();

    endGame(){
        this.endGameEmitter.next(true);
    }

    disableButtons(){
        this.disableButtonEmitter.next(true);
    }

    enableButton(){
        this.disableButtonEmitter.next(false);
    }
}