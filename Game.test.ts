// const { findValidMoves } = require("./Game.ts");
import {Game, Board, Tile, Position, Colour, Piece, findValidMoves} from "./Game";

describe("Game", () => {
    test("Testing the isValidMove function", () => {
        const tile: Tile = {
            colour: Colour.Black,
            piece: {colour: Colour.Black},
            position: {row: 3, column: 3}
        }
        // has valid moves
        expect(findValidMoves(tile, Colour.Black)).toStrictEqual([{row:4, column: 2}, {row:4, column:4}]);
        // wrong player
        expect(findValidMoves(tile, Colour.White)).toStrictEqual([]);
        tile.piece = null;
        // no piece
        expect(findValidMoves(tile, Colour.Black)).toStrictEqual([]);
        // no piece
        expect(findValidMoves(tile, Colour.White)).toStrictEqual([]);    

        tile.piece = {colour: Colour.White};
        // has valid moves
        expect(findValidMoves(tile, Colour.White)).toStrictEqual([{row:2, column: 2}, {row:2, column:4}]);
        // wrong player
        expect(findValidMoves(tile, Colour.Black)).toStrictEqual([]);
        tile.piece = null;
        // no piece
        expect(findValidMoves(tile, Colour.Black)).toStrictEqual([]);
        // no piece
        expect(findValidMoves(tile, Colour.White)).toStrictEqual([]);  

        // check edges
        tile.piece = {colour: Colour.Black};
        tile.position = {row: 0, column: 0}
        expect(findValidMoves(tile, Colour.Black)).toStrictEqual([{row:1, column: 1}]);

        tile.position = {row: 0, column: 7}
        expect(findValidMoves(tile, Colour.Black)).toStrictEqual([{row:1, column: 6}]);
    });
});