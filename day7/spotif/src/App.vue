<template>
  <div id="app">
    <header>
      <h1> My Music </h1>
    </header>
    <main>
      <section class="player">
        <h2 class="song-title"> {{ current.title }} </h2>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      current: {
        title: 'SONG TITLE'
      },
      songs: [
        {
          title: 'Broke for free',
          artist: 'Juparo',
          src: require('./assets/Broke_For_Free_-_01_-_Night_Owl.mp3')
        },
        {
          title: 'Deaf kev invincible',
          artist: 'Holly Knight, Simon Climie',
          src: require('./assets/deaf-kev-invincible.mp3')
        },
        {
          title: 'Trip to Ganymed',
          artist: 'Kielokaz',
          src: require('./assets/KieLoKaz_-_02_-_Trip_to_Ganymed_Kielokaz_ID_363.mp3')
        },
        {
          title: 'Wow Kielokaz',
          artist: 'Kielokaz',
          src: require('./assets/KieLoKaz_-_03_-_Wow_Kielokaz_ID_359.mp3')
        },
        {
          title: 'Mid-air machine',
          artist: 'Unknown',
          src: require('./assets/Mid-Air_Machine_-_Ampheral__Text_Notification.mp3')
        },
        {
          title: 'Grateful',
          artist: 'Neffex',
          src: require('./assets/neffex-grateful.mp3')
        },
      ]
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
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #FFF;
}
</style>
