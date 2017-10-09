<template>
  <div id="app">
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import { a, b } from './deps';
import Hello from './components/Hello';

export default {
  name: 'app',
  calc (x) {
    return x + a + b;
  },
  components: {
    Hello
  }
}
</script>

<style>
</style>
