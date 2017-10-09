<template>
  <div id="app">
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import { a, b } from './deps';

export default {
  name: 'app',
  calc (x) {
    return x + a + b;
  },
}
</script>

<style>
</style>
