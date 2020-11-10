<template>
<h2> {{ count }} </h2>
</template>

<script>
import {ref} from 'vue';
export default{


  setup() {
    const count = ref(0);
    return {
      count
    }
  }
}

</script>

<style>
</style>
