board
    - 8x8 squares
two players
pieces on black squares
    - first 3 rows
piece
    - identical
    - only move "forward"
    - only move diagonal
capturing
    - diagonal
    - space after it is empty
    - only forward
    <!-- - chain capture -->
win
    - one player has no pieces

testing types
    - unit
        - a part of the code (object, function etc) works correctly
        - TDD
    - integration
        - test to ensure that a new feature does not break exisiting features
    - UI testing
    
---

OOP
Game
- Board
- turn: Colour
- Business Logic
    - Setup
        - Initialise board
        - initialse pieces
    - Turn
        - Check for legal moves
        - Select piece
            - display valid moves
                - move to valid destination
                - check for win

                - unselect piece


Board
- Tiles
- size: int (assume square)

Tile
- colour
- Piece
- Position

Piece
- Colour
- move()
- capture()

- Position
    - row
    - colomn

findAllValidMoves(Colour colour) 
- Go through each tile
    - run findValidMoves()

- function findValidMoves(Colour colour) : \[Position]

    - if it has a piece, check if it is the right colour
    - if so, does it have space forward or to capture
    - return array of Positions

--- 
test cases
findValidMoves
    - tile (3,3)
    - piece
        - black
    - no other pieces on any tiles
    -> [(4, 2), (4, 4)]


