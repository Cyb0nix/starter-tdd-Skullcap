import { describe, test, expect } from "@jest/globals";
import { Rover } from "./rover";
import { Position } from "./position.enum";
import { Direction } from "./direction.enum";
import { Movement } from "./movement.enum";
import { Side } from "./side.enum";

describe("rover", () => {
  const directions = [
    {
      direction: Direction.NORTH,
      forward: { x: 0, y: 1 },
      backward: { x: 0, y: -1 },
      right: Direction.EAST,
      left: Direction.WEST,
    },
    {
      direction: Direction.SOUTH,
      forward: { x: 0, y: -1 },
      backward: { x: 0, y: 1 },
      right: Direction.WEST,
      left: Direction.EAST,
    },
    {
      direction: Direction.EAST,
      forward: { x: 1, y: 0 },
      backward: { x: -1, y: 0 },
      right: Direction.SOUTH,
      left: Direction.NORTH,
    },
    {
      direction: Direction.WEST,
      forward: { x: -1, y: 0 },
      backward: { x: 1, y: 0 },
      right: Direction.NORTH,
      left: Direction.SOUTH,
    },
  ];

  directions.forEach(({ direction, forward, backward, right, left }) => {
    test(`should be able to move forward when facing ${Direction[direction]}`, () => {
      const rover = new Rover(new Position(0, 0, direction));
      rover.move(Movement.FORWARD);
      expect(rover.position).toEqual({ direction, ...forward });
    });

    test(`should be able to move backward when facing ${Direction[direction]}`, () => {
      const rover = new Rover(new Position(0, 0, direction));
      rover.move(Movement.BACKWARD);
      expect(rover.position).toEqual({ direction, ...backward });
    });

    test(`should be able to turn right when facing ${Direction[direction]}`, () => {
      const rover = new Rover(new Position(0, 0, direction));
      rover.turn(Side.RIGHT);
      expect(rover.position).toEqual({ direction: right, x: 0, y: 0 });
    });

    test(`should be able to turn left when facing ${Direction[direction]}`, () => {
      const rover = new Rover(new Position(0, 0, direction));
      rover.turn(Side.LEFT);
      expect(rover.position).toEqual({ direction: left, x: 0, y: 0 });
    });
  });
});
