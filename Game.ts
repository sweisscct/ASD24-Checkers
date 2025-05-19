export type Game = {
    board: Board,
    turn: Colour
}

export type Board = {
    tiles: [Tile],
    size: number
}

export type Tile = {
    colour: Colour,
    piece: Piece | null,
    position: Position,

}

export type Piece = {
    colour: Colour
}

export type Position = {
    row: number,
    column: number
}

// Enumerated values 
// like true and false, but custom
export enum Colour {
    Black, // starts at bottom row 0
    White // starts at top row 7
}

const tile: Tile = {
    colour: Colour.Black,
    piece: null,
    position: {
        row: 0,
        column: 0
    }
}

export function findValidMoves(tile: Tile, playerColour: Colour) : Position[] {
    // short circuit
    if (!tile.piece || tile.piece.colour != playerColour) return [];
    let validMoves: Position[] = [];
    let leftCol: number = tile.position.column-1;
    let rightCol: number = tile.position.column+1;
    let row: number; 
    switch (playerColour) {
        case Colour.Black: row = tile.position.row+1; break;
        case Colour.White: row = tile.position.row-1;
    }
    if (leftCol >= 0) validMoves.push({row, column: leftCol});
    if (rightCol < 8) validMoves.push({row, column: rightCol});
    return validMoves;
}

    /*
    public [Position] findValidMoves(Tile tile, Colour playerColour) {
    }
    */

// module.exports = findValidMoves;

