<!-- This file will hold current values of fields on app -->

<template>
    <div class="overview">
        <h3>Current Bytes</h3>
        <div class="bytes">{{ bytes }}</div>
        <div class="bps">Bytes per second: {{ bps }}</div>
        <div class="level">Current Level: {{ level }}</div>
        <div class="next-level">Bytes Until Next Level: {{bytesUntilNextLevel}}</div>
    </div>
</template>

<script>
export default {
    name: 'overview',
    computed: { //Where all computations will take place
        bytes() {
            return Math.round(this.$store.state.bytes); //Accessing bytes from store
        },
        bps() {
            return (this.$store.state.bps).toFixed(1);
        },
        level() {
            return this.$store.state.player.level;
        },
        bytesUntilLevelUp() {
            return this.$store.getters.bytesUntilLevelUp;
        }
    }
}
</script>