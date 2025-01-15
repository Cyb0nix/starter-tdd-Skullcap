import { Direction } from "./direction.enum";
import { Movement } from "./movement.enum";
import { Position } from "./position.enum";
import { Side } from "./side.enum";
import { Command } from "./command.enum";

export class Rover {
  position: Position;

  constructor(position: Position) {
    this.position = position;
  }

  executeCommands(commands: Command[]) {
    commands.forEach((command) => {
      switch (command) {
        case Command.FORWARD:
          this.move(Movement.FORWARD);
          break;
        case Command.BACKWARD:
          this.move(Movement.BACKWARD);
          break;
        case Command.RIGHT:
          this.turn(Side.RIGHT);
          break;
        case Command.LEFT:
          this.turn(Side.LEFT);
          break;
      }
    });
  }

  move(movement: Movement) {
    switch (this.position.direction) {
      case Direction.NORTH:
        this.position.y += movement;
        break;
      case Direction.SOUTH:
        this.position.y -= movement;
        break;
      case Direction.EAST:
        this.position.x += movement;
        break;
      case Direction.WEST:
        this.position.x -= movement;
        break;
    }
  }

  turn(side: Side) {
    this.position.direction += side + 360;
    this.position.direction %= 360;
  }
}
