<template>
  <div class="absolute z-20 top-14 w-screen bg-light-green ">
    <div class="flex flex-col justify-center items-center">
        <a href="http://atp.ub.ac.id/profil/" @click="$emit('loading'); $emit('close-menu')" class=" w-full py-5 text-center border-t-2 border-dark-green hover:bg-dark-green transition-colors duration-200">about us</a>
        <router-link @click="$emit('close-menu')" to="/data" class=" w-full py-5 text-center border-t-2 border-dark-green hover:bg-dark-green transition-colors duration-200">
            Monitoring
        </router-link>
        <div @click="openMarket = !openMarket"  class="h-full w-full">
          <button  class=" w-full py-5 text-center border-t-2 border-dark-green hover:bg-dark-green transition-colors duration-200">
              Market
          </button>
          <transition name="fade">
            <div v-if="openMarket == true"  class="flex hover:flex w-full flex-col bg-white drop-shadow-lg">
              <a @click="$emit('close-menu'); $emit('loading')" class="px-5 py-3 border-t border-dark-green bg-light-green hover:bg-dark-green" href="http://atp.ub.ac.id/barang/">Barang</a>
              <a @click="$emit('close-menu'); $emit('loading')" class="px-5 py-3 border-t border-dark-green bg-light-green hover:bg-dark-green" href="http://atp.ub.ac.id/jasa/">Layanan</a>
            </div>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
      return{   
          openMarket:false,
      }
  },
}
</script>

<style>

</style>