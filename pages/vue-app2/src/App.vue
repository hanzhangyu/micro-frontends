<template>
    <div>
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
</style>
