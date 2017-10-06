<script>
const { a, b } = require('./somedep');

export default {
  fn(x) {
    return x + a + b;
  }
};
</script>
