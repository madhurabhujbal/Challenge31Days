<template>
  <div> <!-- Will give an error if code is not wrapped in div as vue3 allows only one element in template tag -->
    <h2> {{ state.count }}, doubled={{ state.double }} </h2>
    <button @click="updateCount(true)">Increase</button>
    <button @click="updateCount(false)">Decrease</button>
  </div>
</template>

<script>
import { reactive, computed} from 'vue';
export default{
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function updateCount(increase) {
      if(increase)
      state.count++;

      else
      state.count--;
    }

    return {
      state,
      updateCount
    }
  }
}

</script>

<style>
</style>
