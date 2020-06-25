<template>
    <div class="product">
        <div class="product-inner">
            <div class="product-text-wrap">
                <h2 class="bg-text"> {{product.bgtext}} </h2>
            </div>
            <div class="product-image-wrap">
                <img :src="product.src" class="image" />
            </div>
            <div class="product-detail">
                <h2> {{product.title}} </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi iusto sint! Sed natus fuga, sequi pariatur at nisi modi!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    props: ['product']
}
</script>

<style>
    .product {
        flex: 1 1 33.333%;
        width: 100%;
        padding: 25px;
    }

    .product-inner {
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }

    .product-image-wrap .image {
        width: 100%;
    }
</style>