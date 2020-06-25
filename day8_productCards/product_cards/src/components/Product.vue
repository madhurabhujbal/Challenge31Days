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