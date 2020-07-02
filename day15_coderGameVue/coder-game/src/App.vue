<template>
  <div id="game">
    <Overview />
  </div>
</template>

<script>
import Overview from './components/Overview';

export default {
  name: 'App',
  components: {
    Overview
  },
  methods: {
    coding() {
      this.$store.commit('incrementBytes', this.$store.state.bpk); //We want to commit every time any change occurs/state changes/mutates on a field. Here, we commit when bpk is changed
    },

    loop() { //this loop is called 60frames/sec
      //Game loop
      this.levelManager();
      requestAnimationFrame(this.loop);
    },
    levelManager() {
      if (this.$store.getters.bytesUntilLevelUp <= 0) {
        this.$store.commit('levelUp');
      }
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
