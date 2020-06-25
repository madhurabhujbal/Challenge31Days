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
          src: require('./assets/greenShoes.jpg')
        },
        {
          title: 'Nike Black Shoes',
          color: 'black',
          bgtext: 'FLEX',
          src: require('./assets/greyShoes.jpg')
        },
        {
          title: 'Nike Black Shoes',
          color: 'grey, orange, blue',
          bgtext: 'LIGHT',
          src: require('./assets/multicolorShoes.jpg')
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
  font-family: 'montseratt', sans-serif;
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
