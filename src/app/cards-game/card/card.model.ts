import {enumSuits} from '../shared/enums';

export class Card{
    constructor(
        public value: string,
        public suit: enumSuits,
        public selected: boolean
    ){}
}