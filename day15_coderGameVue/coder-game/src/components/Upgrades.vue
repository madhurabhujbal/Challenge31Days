<template>
    <div class="upgrades">
        <div v-for="(upgrade, index) in upgrades"
        :key="index"
        class="upgrade"
        >
        {{ upgrade.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'upgrades',
    computed: {
        upgrades() {
            return this.$store.state.upgrades;
        }
    }
}
</script>