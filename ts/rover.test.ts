import { describe, test, expect } from "@jest/globals";
import { Rover } from "./rover";
import { Position } from "./position";
import { Direction } from "./direction";

describe("rover", () => {
    test("should be able to Moving forward when facing North", () => {
        const rover = new Rover(new Position(0, 0, Direction.NORTH));
        rover.moveForward();
        expect(rover.position).toEqual({ direction: Direction.NORTH, x: 0, y: 1 });
    });
});
    
