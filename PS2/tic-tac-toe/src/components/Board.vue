<template>
    <div class="game-container">
      <h2>Ігрове поле</h2>
      <div class="board">
        <GameSquare
          v-for="(value, index) in squares"
          :key="index"
          :value="value"
          @click="handleClick(index)"
        />
      </div>
      <p v-if="winner">Переможець: {{ winner }}</p>
      <p v-else-if="isDraw">Нічия!</p>
      <button v-if="winner || isDraw" @click="resetGame" class="reset-button">Ще раз</button>
    </div>
  </template>
  
  <script>
  import GameSquare from './Square.vue';
  
  export default {
    name: 'GameBoard',
    components: {
      GameSquare,
    },
    data() {
      return {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    },
    computed: {
      winner() {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (
            this.squares[a] &&
            this.squares[a] === this.squares[b] &&
            this.squares[a] === this.squares[c]
          ) {
            return this.squares[a];
          }
        }
        return null;
      },
      isDraw() {
        return this.squares.every((square) => square !== null) && !this.winner;
      },
    },
    methods: {
      handleClick(index) {
        if (this.squares[index] || this.winner) {
          return;
        }
        this.squares[index] = this.xIsNext ? 'X' : 'O';
        this.xIsNext = !this.xIsNext;
      },
      resetGame() {
        this.squares = Array(9).fill(null);
        this.xIsNext = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
  }
  
  .reset-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .reset-button:hover {
    background-color: #2980b9;
  }
  </style>
  