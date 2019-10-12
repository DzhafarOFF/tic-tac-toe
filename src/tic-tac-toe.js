class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.cells = [[null, null, null], [null, null, null], [null, null, null]]; 
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.cells[rowIndex][columnIndex] === null) {
            this.cells[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayer = this.currentPlayer === 'x'? 'o' : 'x';
        }  
    }

    isFinished() {
        if (this.getWinner() !== null || this.isDraw()) return true;
        return false;
    }

    getWinner() {
        let maps = {
            0 : this.cells[0][0],
            1 : this.cells[0][1],
            2 : this.cells[0][2],
            3 : this.cells[1][0],
            4 : this.cells[1][1],
            5 : this.cells[1][2],
            6 : this.cells[2][0],
            7 : this.cells[2][1],
            8 : this.cells[2][2],
        };

        const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let win of wins) {
            if (maps[win[0]] === maps[win[1]] && maps[win[1]] === maps[win[2]]) return maps[win[0]];
        } 
        return null;
    }

    noMoreTurns() {
        for (let row of this.cells) {
            for (let cell of row) {
                if (cell === null) return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() === null && this.noMoreTurns()) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.cells[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
