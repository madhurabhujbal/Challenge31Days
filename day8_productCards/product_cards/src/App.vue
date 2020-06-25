<template>
  <main id="app">
    <section class="products">
      <Product
        v-for="product in products"
        :key="product.color"
        :product="product"
      />
    </section>
  </main>
</template>

<script>
import Product from './components/Product';
export default {
  name: 'App',
  components: {
    Product
  },
  data() {
    return {
      products: [
        {
          title: 'Nike Green Shoes',
          color: 'green',
          bgtext: 'MAX',
          src: require('./assets/greenShoe.png')
        },
        {
          title: 'Nike Blue Shoes',
          color: 'blue',
          bgtext: 'FLEX',
          src: require('./assets/blueShoe.png')
        },
        {
          title: 'Nike Pink Shoes',
          color: 'pink',
          bgtext: 'LIGHT',
          src: require('./assets/pinkShoe.png')
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}

</style>
