<template>
  <div id="app">
    <main>
      <header>
        <h1> Scroll Progress Bar </h1>
      </header>
      <Post />
    </main>
  </div>
</template>

<script>
import Post from './components/Post';

export default {
  components: {
    Post
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'montseratt', sans-serif;
}

main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

header {
  background-color: #313131;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: #FFF;
  font-size: 30px;
  text-align: center;
}

</style>
