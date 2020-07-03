<template>
  <div id="app">
    <button class="button" @click="showModal = true">
      Show Modal
    </button>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      showModal : true
    }
  }
}
</script>

<style>
</style>
