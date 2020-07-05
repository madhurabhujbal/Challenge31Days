<template>
    <nav>
        <div class="menu-item"><a href="#">Home</a></div>
        <div class="menu-item"><a href="#">About</a></div>
        <div class="menu-item"><a href="#">Contact</a></div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            services: [
                {
                    title: 'Web',
                    link: '#'
                },

                {
                    title: 'Design',
                    link: '#'
                },

                {
                    title: 'Videos',
                    link: '#'
                }
            ]
        }
    }
}
</script>

<style>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item {
    color: #FFF;
    padding: 20px 30px;
    position: relative;
    font-size: 25px;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active, nav .menu-item:hover {
    background-color: #444;
    border-bottom-color: #FF5858;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}

</style>