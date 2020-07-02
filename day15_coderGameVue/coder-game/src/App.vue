<template>
  <div id="game">
    Hello
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    coding() {
      //Do something
    },

    loop() { //this loop is called 60frames/sec
      //Game loop
      requestAnimationFrame(this.loop);
    }
  },

  created() {
    this.loop(); //Once this component is created, start to loop
    window.addEventListener('keypress', this.coding); //Recognises key pressed anywhere on game window
  },

  destroyed() {
    window.addEventListener('keypress', this.coding); //Recognises key pressed anywhere on game window
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'montserrat', sans-serif;
  }

</style>
