<template>
  <div> <!-- Will give an error if code is not wrapped in div as vue3 allows only one element in template tag -->
    <h2> {{ count }} </h2>
    <button @click="updateCount(true)">Increase</button>
    <button @click="updateCount(false)">Decrease</button>
  </div>
</template>

<script>
import {ref} from 'vue';
export default{

  setup() {
    const count = ref(0);
    function updateCount(increase) {
      if(increase)
      count.value++;

      else
      count.value--;
    }

    return {
      count,
      updateCount
    }
  }
}

</script>

<style>
</style>
