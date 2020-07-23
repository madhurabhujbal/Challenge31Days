<template>
  <div id="app">
    <button class="button" @click="showModal = true">
      Show Modal
    </button>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quod necessitatibus est dolorum, culpa tempore non unde deserunt eaque voluptates?
        </p>
        <button class="button" @click="showModal = false">
          Close Modal
        </button>
      </div>
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
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

#app {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 35px 45px;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  border-radius: 8px;
  color: #FFF;

  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.modal-overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  border-radius: 16px;

  padding: 25px;
}

.modal h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

.modal p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

/* These stylings will be binded to transition tag in html with name fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}

</style>
