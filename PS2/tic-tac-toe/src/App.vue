<template>
  <div id="app">
    <h1>Игра "Хрестики-Нолики"</h1>
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from './components/Board.vue';

export default {
  name: 'App',
  components: {
    GameBoard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>
