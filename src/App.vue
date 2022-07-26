<template>
  <Header />
  
  <router-view></router-view>
</template>

<script>
//import landingpage from './components/landingpage.vue'
import Header from './components/header.vue'
export default {
components:{ Header}
}
</script>

<style>

</style>