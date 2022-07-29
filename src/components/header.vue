<template>
  <div v-if="openMenu == true" @click="openMenu = false" class=" z-20 bg-gray-7 opacity-60 w-screen h-screen absolute top-0" style="backdrop-filter: blur(5px);"></div>
  <loading v-if="isLoading == true" />
  <div class=" w-screen z-30 h-14 absolute" style="background-color:#25A18E;">
    <div class=" flex flex-row text-center items-center h-full justify-between pl-5">
        <section class=" font-bold text-lg">
            LOGO
        </section>
        <section class="flex h-full">
          <section class="flex">
            <router-link @click="openMenu = false" to="/" class=" mr-5 sm:mr-0 h-full items-center justify-center sm:border-l-2 sm:border-dark-green  flex px-4 sm:px-7 hover:bg-dark-green transition-colors duration-200">
              home
            </router-link>
            <button v-if="mobile == true" @click="openMenu = !openMenu" class="mr-5 items-center justify-center h-auto flex">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class=" fill-current" width="25" height="25" viewBox="0 0 50 50" style=" "><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>
            </button>
          </section>
          <section v-if="mobile == false" class="flex h-full items-center flex-row">
              <router-link v-if="mobile == true" to="/" class=" h-full items-center justify-center flex border-l-2 px-7 border-dark-green hover:bg-dark-green transition-colors duration-200">
                  home
              </router-link>
              <div @mouseleave="openMarket = false" @mouseover="openMarket = true"  class="h-full">
                <button  class=" z-10 peer h-full items-center justify-center flex border-l-2 px-11 border-dark-green hover:bg-dark-green transition-colors duration-200">
                    Market
                </button>
                <transition name="fade">
                <div v-if="openMarket == true"  class="flex z-0 hover:flex w-auto flex-col bg-white drop-shadow-lg">
                  <a @click="isLoading = true" class="px-5 py-3 border-t border-dark-green bg-light-green hover:bg-dark-green" href="http://atp.ub.ac.id/barang/">Barang</a>
                  <a @click="isLoading = true" class="px-5 py-3 border-t border-dark-green bg-light-green hover:bg-dark-green" href="http://atp.ub.ac.id/jasa/">Layanan</a>
                </div>
                </transition>
              </div>
              
              <router-link to="/data" class=" h-full items-center justify-center flex border-l-2 px-7 border-dark-green hover:bg-dark-green transition-colors duration-200">
                  Monitoring
              </router-link>
              <a href="http://atp.ub.ac.id/profil/" @click="isLoading = true" class=" h-full items-center justify-center flex border-l-2 px-7 border-dark-green hover:bg-dark-green transition-colors duration-200">about us</a>
          </section>
        </section>
    </div>
  </div>
  <transition name="slide">
    <Menu @close-menu="openMenu = false" v-if="openMenu == true && mobile == true"/>
  </transition>
</template>

<script>
import Menu from './mobilemenu.vue'
import loading from './loading.vue'
export default {
components:{Menu, loading},
props:{"isLoggedIn": Boolean},
data(){
    return{
        //mobile: true,
        mobile:window.innerWidth <= 700,
        openMenu:false,
        openMarket:false,
        isLoading:false,
    }
}
}
</script>

<style>
.slide-enter-active {
  transition: all .4s ease;
}
.slide-leave-active {
  transition: all .4s ease;
}
.slide-enter-from{
    transform: translateY(-200px);
}
.slide-enter-to{
    transform: translateY(0px);
}
.slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-200px);

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>