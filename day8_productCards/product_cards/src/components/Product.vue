<template>
    <div class="product">
        {{ product.title }}
    </div>
</template>

<script>
export default {
    name: 'product',
    props: ['product']
}
</script>