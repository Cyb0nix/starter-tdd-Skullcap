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

    test("should be able to Moving forward when facing South", () => {
        const rover = new Rover(new Position(0, 0, Direction.SOUTH));
        rover.moveForward();
        expect(rover.position).toEqual({ direction: Direction.SOUTH, x: 0, y: -1 });
    });

    test("should be able to Moving forward when facing East", () => {
        const rover = new Rover(new Position(0, 0, Direction.EAST));
        rover.moveForward();
        expect(rover.position).toEqual({ direction: Direction.EAST, x: 1, y: 0 });
    });

    test("should be able to Moving forward when facing West", () => {
        const rover = new Rover(new Position(0, 0, Direction.WEST));
        rover.moveForward();
        expect(rover.position).toEqual({ direction: Direction.WEST, x: -1, y: 0 });
    });

    test("should be able to Moving backward when facing North", () => {
        const rover = new Rover(new Position(0, 0, Direction.NORTH));
        rover.moveBackward();
        expect(rover.position).toEqual({ direction: Direction.NORTH, x: 0, y: -1 });
    });

    test("should be able to Moving backward when facing South", () => {
        const rover = new Rover(new Position(0, 0, Direction.SOUTH));
        rover.moveBackward();
        expect(rover.position).toEqual({ direction: Direction.SOUTH, x: 0, y: 1 });
    });

    test("should be able to Moving backward when facing East", () => {
        const rover = new Rover(new Position(0, 0, Direction.EAST));
        rover.moveBackward();
        expect(rover.position).toEqual({ direction: Direction.EAST, x: -1, y: 0 });
    });

    test("should be able to Moving backward when facing West", () => {
        const rover = new Rover(new Position(0, 0, Direction.WEST));
        rover.moveBackward();
        expect(rover.position).toEqual({ direction: Direction.WEST, x: 1, y: 0 });
    });

    test("should be able to turn right when facing North", () => {
        const rover = new Rover(new Position(0, 0, Direction.NORTH));
        rover.turnRight();
        expect(rover.position).toEqual({ direction: Direction.EAST, x: 0, y: 0 });
    });

    test("should be able to turn right when facing South", () => {
        const rover = new Rover(new Position(0, 0, Direction.SOUTH));
        rover.turnRight();
        expect(rover.position).toEqual({ direction: Direction.WEST, x: 0, y: 0 });
    });

    test("should be able to turn right when facing East", () => {
        const rover = new Rover(new Position(0, 0, Direction.EAST));
        rover.turnRight();
        expect(rover.position).toEqual({ direction: Direction.SOUTH, x: 0, y: 0 });
    });

    test("should be able to turn right when facing West", () => {
        const rover = new Rover(new Position(0, 0, Direction.WEST));
        rover.turnRight();
        expect(rover.position).toEqual({ direction: Direction.NORTH, x: 0, y: 0 });
    });

    test("should be able to turn left when facing North", () => {
        const rover = new Rover(new Position(0, 0, Direction.NORTH));
        rover.turnLeft();
        expect(rover.position).toEqual({ direction: Direction.WEST, x: 0, y: 0 });
    });

    test("should be able to turn left when facing South", () => {
        const rover = new Rover(new Position(0, 0, Direction.SOUTH));
        rover.turnLeft();
        expect(rover.position).toEqual({ direction: Direction.EAST, x: 0, y: 0 });
    });

    test("should be able to turn left when facing East", () => {
        const rover = new Rover(new Position(0, 0, Direction.EAST));
        rover.turnLeft();
        expect(rover.position).toEqual({ direction: Direction.NORTH, x: 0, y: 0 });
    });

    test("should be able to turn left when facing West", () => {
        const rover = new Rover(new Position(0, 0, Direction.WEST));
        rover.turnLeft();
        expect(rover.position).toEqual({ direction: Direction.SOUTH, x: 0, y: 0 });
    });
});
    
