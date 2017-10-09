<style>
</style>

<template>
  <div id="app">
    <img src="./assets/">
    <hello></hello>
  </div>
</template>

<script>
import { a, b } from './deps';
import Hello from './components/Hello';

export default {
  name: 'app',
  calc () {
    return a + b;
  },
  components: {
    Hello
  }
}
</script>
