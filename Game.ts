type Game = {
    board: Board,
    turn: Colour
}

type Board = {
    tiles: [Tile],
    size: Number
}

type Tile = {
    colour: Colour,
    piece: Piece | null,
    position: Position
}

type Piece = {
    colour: Colour
}

type Position = {
    row: Number,
    column: Number
}

// Enumerated values 
// like true and false, but custom
enum Colour {
    Black,
    White
}

// const game: Game =  {
//     board,
//     turn
// }