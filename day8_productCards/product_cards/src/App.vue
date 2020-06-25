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
          title: 'Nike Black Shoes',
          color: 'black',
          bgtext: 'NIKE',
          src: require('./assets/blackShoes.jpg')
        },
        {
          title: 'Nike Fluorescent Shoes',
          color: 'fluorescent green',
          bgtext: 'AIR',
          src: require('./assets/fluorescentShoes.jpg')
        },
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
        {
          title: 'Nike Black Shoes',
          color: 'black, red',
          bgtext: 'SPORTS',
          src: require('./assets/netRedShoes.jpg')
        },
        {
          title: 'Nike Black Shoes',
          color: 'red',
          bgtext: 'RUN',
          src: require('./assets/redShoes.jpg')
        },
        {
          title: 'Nike Tricolor Shoes',
          color: 'black, green, grey',
          bgtext: 'JSUT DO IT',
          src: require('./assets/tricolorNetShoes.jpg')
        },
      ]
    }
  }
}
</script>

<style>

</style>
