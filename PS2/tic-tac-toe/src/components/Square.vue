<template>
    <button class="square" @click="$emit('click')">
      {{ value }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'GameSquare',
    props: {
      value: String,
    },
  };
  </script>
  
  <style scoped>
  .square {
    width: 100px;
    height: 100px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    cursor: pointer;
  }
  </style>
  