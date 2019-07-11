<template>
    <div id="vue-app">
        vue-app
        <router-link to="/">Go to vue-home</router-link>
        <router-link to="/vue-child">Go to vue-child</router-link>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
    name: "VueApp"
}
</script>

<style lang="scss" scoped>
#vue-app {
    background-color: rgba(0, 128, 0, 0.33);
}
</style>
