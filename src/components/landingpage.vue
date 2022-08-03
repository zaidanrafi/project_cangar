<template>
  <div v-if="openLogin == true || openRegister == true || openLupaPassword == true" @click="openLogin = false; openRegister = false; openLupaPassword = false" class="z-20 bg-gray-7 opacity-60 w-screen h-screen absolute top-0" style="backdrop-filter: blur(5px);"></div>
  <div class="w-screen z-10 h-screen overflow-x-hidden" style="background-image: url('https://i.postimg.cc/ht3yKjwg/bg-fix.jpg'); background-size:cover; background-repeat: no-repeat; background-attachment: fixed;">
    <div class="flex flex-col pl-10 md:pl-24 pr-8 pt-16">
        <section class=" text-white text-4xl sm:text-5xl text-center sm:text-left md:text-6xl lg:text-7xl pt-16">
            <p>MONITORING HIDROPONIK <br> PERTANIAN</p>
        </section>
        <hr class=" sm:hidden mt-8 text-light-green border-2">
        <section class=" text-white pt-12 sm:pt-7 text-lg text-center  flex sm:relative justify-center sm:justify-start sm:text-left w-full">
            <div class="w-11/12 sm:w-3/4">We keep a close eye on the various factors affecting your plants, so maintains optimal growing conditions, minimize problems, and maximize yields.</div>
        </section>
        <section class=" pt-40 sm:pt-24 w-full sm:w-auto flex justify-center sm:justify-start">
            <button v-if="isLoggedIn == true" @click="logout()" class=" bg-light-green px-16 py-3 rounded-2xl text-lg hover:bg-dark-green transition-colors duration-200">
              <span>KELUAR</span>
            </button>
            <button v-else @click="openLogin = true"  class=" bg-light-green px-16 py-3 rounded-2xl text-lg hover:bg-dark-green transition-colors duration-200">
              <span>MASUK</span>
            </button>
        </section>
    </div>
  </div>
  <login @open-lupapassword="openLupaPassword = true; openLogin = false" @open-register="openRegister = true; openLogin = false" @close-login="openLogin = false" v-if="openLogin == true" />
  <register @close-register="openRegister = false" @open-login="openRegister = false; openLogin = true" v-if="openRegister == true"/>
  <lupapassword v-if="openLupaPassword == true" @close-lupapassword="openLupaPassword = false" />
</template>

<script>
import login from './login.vue'
import register from './register.vue'
import lupapassword from './lupapassword.vue'

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
export default {
components:{login, register, lupapassword},
data(){
  return{
    openLogin: false,
    openRegister: false,
    openLupaPassword:false,
    isLoggedIn:"",
    isVerified: false,

  }
},
mounted(){
  const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //const uid = user.uid;
          //console.log(uid);
          console.log(user.displayName);
          console.log(user.emailVerified);
          this.isLoggedIn = true;
          if(user.emailVerified == true){
            this.isVerified = true;
            //alert('email telah diverifikasi');
            //this.openLogin = true;
          }
          // ...
      } else {
          // User is signed out
          // ...
          console.log('no user');
          this.isLoggedIn = false;
      }
      });   
},
methods:{
    logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        console.log(error);
      });
    },
  },
}

</script>

<style>

</style>