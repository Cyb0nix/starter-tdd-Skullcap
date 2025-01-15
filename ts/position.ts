import { Direction } from './direction';

export class Position {
    x: number;
    y: number;
    direction: Direction;

    constructor(x: number, y: number, direction: Direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}