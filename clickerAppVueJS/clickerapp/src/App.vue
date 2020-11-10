<template>
  <div> <!-- Will give an error if code is not wrapped in div as vue3 allows only one element in template tag -->
    <h2> {{ count }} </h2>
    <button @click="increment">Increase</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script>
import {ref} from 'vue';
export default{

  setup() {
    const count = ref(0);
    function increment() {
      count.value++;
    }

    function decrease() {
      count.value--;
    }

    return {
      count,
      increment,
      decrease
    }
  }
}

</script>

<style>
</style>
