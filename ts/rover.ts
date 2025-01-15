import { Direction } from './direction';
import { Position } from './position';

export class Rover {
  position: Position;

  constructor(position: Position) {
    this.position = position;
  }

  move(commands: Command[]) {
    commands.forEach((command) => {
      switch (command) {
        case Command.FORWARD:
          this.moveForward();
          break;
      }
    });
  }

  moveForward() {
    switch (this.position.direction) {
      case Direction.NORTH:
        this.position.y++;
        break;
      case Direction.SOUTH:
        this.position.y--;
        break;
      case Direction.EAST:
        this.position.x++;
        break;
      case Direction.WEST:
        this.position.x--;
        break;
    }
  }

  moveBackward() {
    switch (this.position.direction) {
      case Direction.NORTH:
        this.position.y--;
        break;
      case Direction.SOUTH:
        this.position.y++;
        break;
      case Direction.EAST:
        this.position.x--;
        break;
      case Direction.WEST:
        this.position.x++;
        break;
    }
  }

  turnRight() {
    switch (this.position.direction) {
      case Direction.NORTH:
        this.position.direction = Direction.EAST;
        break;
      case Direction.SOUTH:
        this.position.direction = Direction.WEST;
        break;
      case Direction.EAST:
        this.position.direction = Direction.SOUTH;
        break;
      case Direction.WEST:
        this.position.direction = Direction.NORTH;
        break;
    }
  }

  turnLeft() {
    switch (this.position.direction) {
      case Direction.NORTH:
        this.position.direction = Direction.WEST;
        break;
      case Direction.SOUTH:
        this.position.direction = Direction.EAST;
        break;
      case Direction.EAST:
        this.position.direction = Direction.NORTH;
        break;
      case Direction.WEST:
        this.position.direction = Direction.SOUTH;
        break;
    }
  }
}
