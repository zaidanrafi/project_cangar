<template>
  <div class="absolute z-20 top-14 w-screen bg-light-green ">
    <div class="flex flex-col justify-center items-center">
        <router-link @click="$emit('close-menu')" to="/about-us" class=" w-full py-5 text-center border-t-2 border-dark-green hover:bg-dark-green transition-colors duration-200">
            About us
        </router-link>
        <router-link @click="$emit('close-menu')" to="/data" class=" w-full py-5 text-center border-t-2 border-dark-green hover:bg-dark-green transition-colors duration-200">
            Monitoring
        </router-link>
        <router-link @click="$emit('close-menu')" to="/market" class=" w-full py-5 text-center border-t-2 border-dark-green hover:bg-dark-green transition-colors duration-200">
            Market
        </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>