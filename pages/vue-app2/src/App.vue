<template>
    <div id="vue-app2">
        App
        <router-link to="/">Go to home</router-link>
        <router-link to="/hello">Go to hello</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>
a {
    display: block;
}

div {
    background-color: rgba(0, 0, 0, 0.54);
}
</style>
